import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todos/todosSlice";
export default function TodoList() {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.todos);
    if (!items.length) return <p className="mt-4 text-sm opacity-70">No tasks yet.</p>;

    return (
        <ul className="mt-4 space-y-2">
            {items.map((t) => (
                <li key={t.id} className="border rounded px-3 py-2 flex items-center justify-between">
                    <label className="flex item-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={t.completed} onChange={() => dispatch(toggleTodo(t.id))} />
                        <span className={t.completed?"line-through opacity-60":""}>{t.title}</span>
                    </label>
                    <button className="text-sm px-3 py-1 rounded bg-red-600 text-white" onClick={()=>dispatch(deleteTodo(t.id))}>Delete</button>
                </li>
            ))}
        </ul>
    )

}