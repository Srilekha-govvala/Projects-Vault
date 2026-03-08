# Redux Multislice - Actions Quick Reference

## All Available Actions by Slice

### 📝 TODOS SLICE
**Import**: `import { addTodo, toggleTodo, deleteTodo, fetchTodos } from "./features/todos/todosSlice"`

#### Synchronous Actions

| Action | Usage | Effect |
|--------|-------|--------|
| `addTodo(title)` | `dispatch(addTodo("Learn Redux"))` | Adds new todo to beginning of items array |
| `toggleTodo(id)` | `dispatch(toggleTodo("todo-123"))` | Toggles completed status of todo |
| `deleteTodo(id)` | `dispatch(deleteTodo("todo-123"))` | Removes todo from items array |

#### Asynchronous Actions

| Action | Usage | States |
|--------|-------|--------|
| `fetchTodos()` | `dispatch(fetchTodos())` | Sets loading=true, fetches from API, updates items |

**Example - Combining Multislice Actions**:
```javascript
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./features/todos/todosSlice";
import { showNotification } from "./features/ui/uiSlice";

function MyComponent() {
  const dispatch = useDispatch();
  
  const handleAddTodo = (title) => {
    dispatch(addTodo(title));
    dispatch(showNotification({
      message: `"${title}" added successfully!`,
      type: "success"
    }));
  };
  
  const handleDelete = (id, title) => {
    dispatch(deleteTodo(id));
    dispatch(showNotification({
      message: `"${title}" deleted`,
      type: "success"
    }));
  };
}
```

---

### 🔍 FILTER SLICE
**Import**: `import { setFilterStatus, setSearchText, resetFilters } from "./features/filter/filterSlice"`

| Action | Usage | Effect |
|--------|-------|--------|
| `setFilterStatus(status)` | `dispatch(setFilterStatus("completed"))` | Sets filter status to: "all", "completed", or "pending" |
| `setSearchText(text)` | `dispatch(setSearchText("important"))` | Sets search query text |
| `resetFilters()` | `dispatch(resetFilters())` | Resets all filters to defaults |

**Example - Using Filter State**:
```javascript
import { useDispatch, useSelector } from "react-redux";
import { setFilterStatus, setSearchText, resetFilters } from "./features/filter/filterSlice";

function FilterComponent() {
  const dispatch = useDispatch();
  const { status, searchText } = useSelector((state) => state.filter);
  const items = useSelector((state) => state.todos.items);
  
  // Apply filters to items
  const filtered = items
    .filter(t => {
      if (status === "completed") return t.completed;
      if (status === "pending") return !t.completed;
      return true;
    })
    .filter(t => t.title.toLowerCase().includes(searchText));
  
  return (
    <div>
      <button onClick={() => dispatch(setFilterStatus("completed"))}>
        Show Completed
      </button>
      <input 
        value={searchText}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
        placeholder="Search..."
      />
      <button onClick={() => dispatch(resetFilters())}>
        Reset
      </button>
    </div>
  );
}
```

---

### 🎨 UI SLICE
**Import**: `import { toggleTheme, showNotification, hideNotification, toggleSidebar, selectTodo, clearSelectedTodo } from "./features/ui/uiSlice"`

| Action | Usage | Effect |
|--------|-------|--------|
| `toggleTheme()` | `dispatch(toggleTheme())` | Switches theme between "light" and "dark" |
| `showNotification(payload)` | `dispatch(showNotification({ message: "...", type: "success" }))` | Shows notification with message and type |
| `hideNotification()` | `dispatch(hideNotification())` | Hides current notification |
| `toggleSidebar()` | `dispatch(toggleSidebar())` | Toggles sidebar open/close |
| `selectTodo(id)` | `dispatch(selectTodo("todo-123"))` | Marks todo as selected |
| `clearSelectedTodo()` | `dispatch(clearSelectedTodo())` | Clears selected todo |

**Notification Types**: "success", "error", "info"

**Example - Theme Toggle**:
```javascript
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./features/ui/uiSlice";

function ThemeToggle() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.ui);
  
  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Current theme: {theme}
    </button>
  );
}
```

**Example - Show Notification**:
```javascript
import { showNotification, hideNotification } from "./features/ui/uiSlice";

function NotificationExample() {
  const dispatch = useDispatch();
  
  // Show success
  dispatch(showNotification({
    message: "Task completed!",
    type: "success"
  }));
  
  // Show error
  dispatch(showNotification({
    message: "Something went wrong",
    type: "error"
  }));
  
  // Show info
  dispatch(showNotification({
    message: "FYI: Please check settings",
    type: "info"
  }));
  
  // Hide
  setTimeout(() => {
    dispatch(hideNotification());
  }, 3000);
}
```

---

## Real Multislice Scenarios

### Scenario 1: Complete a Todo with Feedback
```javascript
const handleComplete = (id, title) => {
  // Dispatch to todos slice
  dispatch(toggleTodo(id));
  
  // Dispatch to ui slice
  dispatch(showNotification({
    message: `✓ Marked "${title}" as complete`,
    type: "success"
  }));
  
  // Optional: Dispatch to filter slice if needed
  // dispatch(setFilterStatus("completed"));
};
```

### Scenario 2: Search with Visual Feedback
```javascript
const handleSearch = (text) => {
  // Update filter from filter slice
  dispatch(setSearchText(text));
  
  // Get current state to show feedback
  const filtered = useSelector((state) => {
    const items = state.todos.items;
    return items.filter(t => 
      t.title.toLowerCase().includes(text.toLowerCase())
    );
  });
  
  // Optionally show notification
  if (filtered.length === 0) {
    dispatch(showNotification({
      message: `No todos match "${text}"`,
      type: "info"
    }));
  }
};
```

### Scenario 3: Dark Mode with Task Filter Reset
```javascript
const handleThemeSwitch = () => {
  dispatch(toggleTheme());
  
  // Reset filters for better UX when switching theme
  dispatch(resetFilters());
  
  dispatch(showNotification({
    message: "Theme changed - filters reset",
    type: "info"
  }));
};
```

### Scenario 4: Delete Todo with Multi-Slice Confirmation
```javascript
const handleDelete = (id, title) => {
  // Show confirmation notification
  dispatch(showNotification({
    message: `Deleting "${title}"...`,
    type: "info"
  }));
  
  // Delete from todos slice
  dispatch(deleteTodo(id));
  
  // Clear selection if this was selected (ui slice)
  const selected = useSelector((state) => state.ui.selectedTodoId);
  if (selected === id) {
    dispatch(clearSelectedTodo());
  }
  
  // Show success
  dispatch(showNotification({
    message: `"${title}" deleted permanently`,
    type: "success"
  }));
};
```

---

## Pro Tips for Multislice Pattern

✅ **Do**:
- Keep each slice focused on one domain
- Name slices after their domain (todos, filter, ui, auth, etc.)
- Use descriptive action names
- Organize actions by slice in components
- Dispatch to multiple slices when needed

❌ **Don't**:
- Mix multiple domains in one slice
- Create circular dependencies between slices
- Keep duplicate state across slices
- Ignore the single responsibility principle
- Use slice state for transient component state

---

## File Organization for Multislice

```
src/
├── app/
│   └── store.js                    ← Combines all slice reducers
├── features/
│   ├── todos/
│   │   └── todosSlice.js          ← Todos domain
│   ├── filter/
│   │   └── filterSlice.js         ← Filter domain
│   ├── ui/
│   │   └── uiSlice.js             ← UI domain
│   └── auth/                        ← Future: Auth domain
│       └── authSlice.js
├── components/
│   ├── App.jsx                     ← Root component
│   ├── TodoList.jsx               ← Uses todos + filter + ui
│   ├── TodoInput.jsx              ← Uses todos + ui
│   ├── FilterPanel.jsx            ← Uses filter + ui
│   └── Notification.jsx           ← Uses ui
```

---

## Testing Multislice Pattern

```javascript
// Testing a single action
import todosReducer, { addTodo } from "./features/todos/todosSlice";

test("should add a todo", () => {
  const initialState = { items: [], loading: false, error: null };
  const newState = todosReducer(
    initialState,
    addTodo("Learn Redux")
  );
  expect(newState.items).toHaveLength(1);
});

// Testing multiple slices together
import { configureStore } from "@reduxjs/toolkit";

test("should coordinate between slices", () => {
  const store = configureStore({
    reducer: { todos: todosReducer, filter: filterReducer }
  });
  
  store.dispatch(addTodo("Task 1"));
  store.dispatch(setFilterStatus("pending"));
  
  const state = store.getState();
  expect(state.todos.items).toHaveLength(1);
  expect(state.filter.status).toBe("pending");
});
```
