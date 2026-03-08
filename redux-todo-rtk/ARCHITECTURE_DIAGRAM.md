# Redux Multislice Architecture Diagram

## Redux Store with Multislice

```
┌──────────────────────────────────────────────────────────────┐
│                   REDUX STORE                                │
│                                                               │
│  ┌──────────────────────────────────────────────────────────┐│
│  │  ROOT STATE (Combined from 3 slices)                     ││
│  │                                                           ││
│  │  ┌─────────────────┐  ┌──────────────┐  ┌────────────┐  ││
│  │  │  TODOS SLICE   │  │ FILTER SLICE │  │ UI SLICE   │  ││
│  │  │                 │  │              │  │            │  ││
│  │  │ items: []       │  │ status: "all"│  │ theme:...  │  ││
│  │  │ loading: false  │  │ searchText:"" │  │notification│  ││
│  │  │ error: null     │  │              │  │ sidebar... │  ││
│  │  └─────────────────┘  └──────────────┘  └────────────┘  ││
│  │         ↓                    ↓                   ↓        ││
│  │   todosReducer       filterReducer          uiReducer    ││
│  └──────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
         ↑              ↑              ↑
         │              │              │
    ACTIONS         ACTIONS        ACTIONS
   (dispatch)      (dispatch)      (dispatch)


## Data Flow Example: Adding a Todo

User enters text and clicks "Add"
         │
         ▼
    TodoInput Component
         │
         ├──► dispatch(addTodo(title))  ──► todos slice
         │
         ├──► dispatch(showNotification()) ──► ui slice
         │
         ▼
    Application State Updated
         │
         ├── state.todos.items (new todo added)
         └── state.ui.notification (success message shown)
         │
         ▼
    Components Subscribe to State Changes
         │
         ├── TodoList re-renders (todos changed)
         ├── Notification re-renders (ui changed)
         └── App re-renders (reflects all changes)


## Component to Slice Relationships

┌─────────────────────────────────────────────────────────────┐
│                      APP COMPONENT                          │
│                  (Uses: todos, ui)                          │
└──────┬──────────────────────────────────────────────────────┘
       │
       ├─────────────────────┬──────────────────────┬─────────────────┐
       │                     │                      │                 │
       ▼                     ▼                      ▼                 ▼
   TodoInput           FilterPanel            TodoList          Notification
  (todos, ui)        (filter, ui)          (todos, filter, ui)   (ui)
       │                    │                      │                 │
  DISPATCH:           DISPATCH:              DISPATCH:          DISPATCH:
  ├─ addTodo       ├─ setFilterStatus    ├─ toggleTodo       ├─ hideNotif
  └─ showNotif    ├─ setSearchText      ├─ deleteTodo      
                   └─ resetFilters      └─ showNotif


## Slice Interdependencies Example

  TodoList Component needs:
           │
      ┌────┴────┬────────────┐
      │          │            │
   todos      filter         ui
  (items)   (status,     (theme)
            searchText)
           │
      Uses both todos AND filter
      to create filtered view
```

## Comparison: Single Slice vs Multislice

### ❌ BEFORE: Single Monolithic Slice
```
AppSlice
├── todos[]
├── loading
├── error
├── theme
├── notification
├── sidebarOpen
├── filterStatus
├── searchText
├── sortBy
└── selectedTodo

Problems:
- Hard to find related state
- Difficult to test
- Impossible to reuse parts
- State tree too complex
```

### ✅ AFTER: Multislice Pattern
```
store
├── todos (todos reducer)
│   ├── items[]
│   ├── loading
│   └── error
├── filter (filter reducer)
│   ├── status
│   └── searchText
└── ui (ui reducer)
    ├── theme
    ├── notification
    ├── sidebarOpen
    └── selectedTodoId

Benefits:
- Clear domain separation
- Easy to test each slice
- Components use focused state
- Highly maintainable
- Scalable architecture
```
