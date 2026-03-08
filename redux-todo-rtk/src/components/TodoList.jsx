import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todos/todosSlice";
import { showNotification } from "../features/ui/uiSlice";

export default function TodoList() {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.todos);
    const { status, searchText } = useSelector((state) => state.filter);
    const { theme } = useSelector((state) => state.ui);

    // Multislice example: Filter todos using filter slice state
    const filteredItems = items
        .filter((t) => {
            if (status === "completed") return t.completed;
            if (status === "pending") return !t.completed;
            return true;
        })
        .filter((t) => t.title.toLowerCase().includes(searchText.toLowerCase()));

    const handleToggle = (id, title, completed) => {
        dispatch(toggleTodo(id));
        dispatch(showNotification({
            message: `Marked "${title}" as ${!completed ? "completed" : "pending"} ✓`,
            type: "success"
        }));
    };

    const handleDelete = (id, title) => {
        dispatch(deleteTodo(id));
        dispatch(showNotification({
            message: `Deleted: "${title}" ✓`,
            type: "success"
        }));
    };

    if (!items.length) return <p className={`mt-4 text-sm opacity-70 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>No tasks yet.</p>;

    if (!filteredItems.length) return <p className={`mt-4 text-sm opacity-70 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>No tasks match current filters.</p>;

    return (
        <ul className="mt-4 space-y-2">
            {filteredItems.map((t) => (
                <li key={t.id} className={`border rounded px-3 py-2 flex items-center justify-between transition ${theme === 'dark' ? 'border-gray-600 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}>
                    <label className={`flex item-center gap-2 cursor-pointer ${theme === 'dark' ? 'text-gray-200' : ''}`}>
                        <input 
                            type="checkbox" 
                            checked={t.completed} 
                            onChange={() => handleToggle(t.id, t.title, t.completed)}
                            className="cursor-pointer"
                        />
                        <span className={t.completed ? `line-through opacity-60` : ""}>{t.title}</span>
                    </label>
                    <button 
                        className={`text-sm px-3 py-1 rounded font-semibold transition ${theme === 'dark' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`} 
                        onClick={() => handleDelete(t.id, t.title)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )

}