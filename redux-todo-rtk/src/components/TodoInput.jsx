import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addTodo } from "../features/todos/todosSlice";
import { showNotification } from "../features/ui/uiSlice";

export default function TodoInput(){
    const [text,setText]=useState("");
    const dispatch=useDispatch();
    const {theme}=useSelector((state)=>state.ui);
    
    const onAdd=()=>{
        const title=text.trim();
        if(!title) {
            // Multislice example: Dispatch to ui slice to show notification
            dispatch(showNotification({
                message:"Please enter a task title",
                type:"error"
            }));
            return;
        }
        // Multislice example: Dispatch to todos slice to add todo
        dispatch(addTodo(title));
        // And dispatch to ui slice to show success notification
        dispatch(showNotification({
            message:`Added: "${title}" ✓`,
            type:"success"
        }));
        setText("")
    }
    return(
        <div className="flex gap-2">
            <input 
            className={`flex-1 border rounded px-3 py-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            placeholder="Add a task..."
            value={text}
            onChange={(e)=>setText(e.target.value)}
            onKeyDown={(e)=>e.key==="Enter" && onAdd()}/>
            <button className={`px-4 py-2 rounded font-semibold transition ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
            onClick={onAdd}>Add</button>
        </div>
    )
}