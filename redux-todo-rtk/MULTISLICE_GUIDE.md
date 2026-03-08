# Redux Toolkit Multislice Pattern - Complete Guide

## What is Multislice?

The **multislice pattern** is a Redux best practice where you organize your state into **multiple independent Redux slices** instead of having one monolithic slice. Each slice manages a specific domain of your application state.

## Project Structure

This project demonstrates multislice with 3 separate slices:

```
redux-todo-rtk/
├── src/
│   ├── app/
│   │   └── store.js              ← Combines all slices
│   ├── features/
│   │   ├── todos/
│   │   │   └── todosSlice.js     ← Slice 1: Todo items & operations
│   │   ├── filter/
│   │   │   └── filterSlice.js    ← Slice 2: Filter & search logic
│   │   └── ui/
│   │       └── uiSlice.js        ← Slice 3: UI state & notifications
│   └── components/
│       ├── App.jsx               ← Uses all 3 slices
│       ├── TodoList.jsx          ← Uses todos + filter slices
│       ├── TodoInput.jsx         ← Uses todos + ui slices
│       ├── FilterPanel.jsx       ← Uses filter + ui slices
│       └── Notification.jsx      ← Uses ui slice
```

---

## Understanding Each Slice

### 1. **Todos Slice** (`todosSlice.js`)
**Purpose**: Manages todo items and async data fetching

**State Structure**:
```javascript
{
  items: [],           // Array of todo objects
  loading: false,      // Loading state for async operations
  error: null          // Error messages
}
```

**Actions & Reducers**:
- `addTodo(title)` - Add new todo
- `toggleTodo(id)` - Mark todo as complete/incomplete
- `deleteTodo(id)` - Remove a todo
- `fetchTodos()` - Async action to fetch from API

**Example Usage**:
```javascript
const { items } = useSelector((state) => state.todos);
dispatch(addTodo("Learn Redux"));
```

---

### 2. **Filter Slice** (`filterSlice.js`)
**Purpose**: Manages filtering and searching of todos

**State Structure**:
```javascript
{
  status: "all",        // "all" | "completed" | "pending"
  searchText: ""        // Search query
}
```

**Actions & Reducers**:
- `setFilterStatus(status)` - Filter by completion status
- `setSearchText(text)` - Set search query
- `resetFilters()` - Reset all filters

**Example Usage**:
```javascript
const { status, searchText } = useSelector((state) => state.filter);
dispatch(setFilterStatus("completed"));
dispatch(setSearchText("important"));
```

---

### 3. **UI Slice** (`uiSlice.js`)
**Purpose**: Manages UI state like theme, notifications, and modal states

**State Structure**:
```javascript
{
  theme: "light",        // "light" | "dark"
  notification: {
    show: false,
    message: "",
    type: "success"      // "success" | "error" | "info"
  },
  sidebarOpen: true,    // Sidebar visibility
  selectedTodoId: null  // Currently selected todo
}
```

**Actions & Reducers**:
- `toggleTheme()` - Switch between light/dark mode
- `showNotification(payload)` - Display notification
- `hideNotification()` - Hide notification
- `toggleSidebar()` - Toggle sidebar
- `selectTodo(id)` - Select a todo
- `clearSelectedTodo()` - Clear selection

**Example Usage**:
```javascript
const { theme, notification } = useSelector((state) => state.ui);
dispatch(toggleTheme());
dispatch(showNotification({ message: "Todo added!", type: "success" }));
```

---

## The Redux Store Configuration

**Without Multislice** (Bad - everything in one slice):
```javascript
// ❌ DON'T: Monolithic reducer
const store = configureStore({
  reducer: {
    app: monolithicReducer  // One huge slice
  }
});
```

**With Multislice** (Good - multiple focused slices):
```javascript
// ✅ DO: Multiple slices combined
import todosReducer from "../features/todos/todosSlice";
import filterReducer from "../features/filter/filterSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
    ui: uiReducer
  }
});
```

---

## Real-World Multislice Examples in This App

### Example 1: TodoInput Component
**Uses 2 slices**: `todos` + `ui`

```javascript
const onAdd = () => {
  const title = text.trim();
  if (!title) {
    // Dispatch to UI slice (show error notification)
    dispatch(showNotification({
      message: "Please enter a task title",
      type: "error"
    }));
    return;
  }
  
  // Dispatch to todos slice (add the todo)
  dispatch(addTodo(title));
  
  // Dispatch to ui slice (show success notification)
  dispatch(showNotification({
    message: `Added: "${title}" ✓`,
    type: "success"
  }));
};
```

### Example 2: TodoList Component
**Uses 3 slices**: `todos` + `filter` + `ui`

```javascript
const { items } = useSelector((state) => state.todos);
const { status, searchText } = useSelector((state) => state.filter);
const { theme } = useSelector((state) => state.ui);

// Use filter slice state to filter todos from todos slice
const filteredItems = items
  .filter((t) => {
    if (status === "completed") return t.completed;
    if (status === "pending") return !t.completed;
    return true;
  })
  .filter((t) => t.title.toLowerCase().includes(searchText));

// Use ui slice state for styling
const itemClass = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50';
```

### Example 3: FilterPanel Component
**Uses 2 slices**: `filter` + `ui`

```javascript
const { status, searchText } = useSelector((state) => state.filter);
const { theme } = useSelector((state) => state.ui);

// Dispatch filter actions
dispatch(setFilterStatus("completed"));
dispatch(setSearchText("important"));

// Use theme from UI slice for styling
const bgClass = theme === 'dark' ? 'bg-purple-900' : 'bg-purple-50';
```

---

## Benefits of Multislice Pattern

✅ **Separation of Concerns**
- Each slice handles one domain
- Easy to understand and maintain
- Clear data ownership

✅ **Scalability**
- Easy to add new slices as app grows
- No need to refactor existing slices
- Each team can manage their own slice

✅ **Testability**
- Slices can be tested independently
- Easier to mock and debug
- Clear slice boundaries

✅ **Code Reusability**
- Slices can be shared across components
- Selectors are reusable
- Reducers are pure functions

✅ **Performance**
- Components only re-render when their slice updates
- Fine-grained state management
- Better optimization possibilities

---

## Key Takeaways

1. **One Slice = One Domain**: Each slice manages a specific area of state
2. **Compose Slices in Store**: Combine multiple slices when configuring the store
3. **Independent State Trees**: Each slice has its own state tree
4. **Multiple Dispatches**: A component can dispatch to multiple slices
5. **Smart Selectors**: Use `useSelector` to access specific slice state

---

## Code Patterns to Remember

### Accessing Multiple Slices
```javascript
const todos = useSelector((state) => state.todos.items);
const filter = useSelector((state) => state.filter.status);
const theme = useSelector((state) => state.ui.theme);
```

### Dispatching to Multiple Slices
```javascript
dispatch(addTodo(title));              // todos slice
dispatch(setFilterStatus("pending"));  // filter slice
dispatch(showNotification({...}));    // ui slice
```

### Combining State from Multiple Slices
```javascript
const TodosWithFilter = () => {
  const items = useSelector((state) => state.todos.items);
  const status = useSelector((state) => state.filter.status);
  
  // Use both slices together
  const filtered = items.filter(t => 
    status === "all" || t.completed === (status === "completed")
  );
};
```

---

## Further Learning

- Redux Toolkit docs: https://redux-toolkit.js.org/
- Redux Fundamentals: https://redux.js.org/tutorials/fundamentals/part-1-overview
- Slice Pattern: https://redux-toolkit.js.org/api/createSlice
