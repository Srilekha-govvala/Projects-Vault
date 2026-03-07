import { useState } from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

export default function TodoInput(){
    const [text,setText]=useState("");
    const dispatch=useDispatch();
    const onAdd=()=>{
        const title=text.trim();
        if(!title) return;
        dispatch(addTodo(title));
        setText("")
    }
    return(
        <div className="flex gap-2">
            <input 
            className="flex-1 border rounded px-3 py-2"
            placeholder="Add a task..."
            value={text}
            onChange={(e)=>setText(e.target.value)}
            onKeyDown={(e)=>e.key==="Enter" && onAdd()}/>
            <button className="px-4 py-2 rounded bg-black text-white"
            onClick={onAdd}>Add</button>
        </div>
    )
}