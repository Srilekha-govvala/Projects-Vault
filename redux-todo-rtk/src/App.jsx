import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { fetchTodos } from "./features/todos/todosSlice";

export default function App(){
  const dispatch=useDispatch();
  const {loading,error}=useSelector((state)=>state.todos);
  useEffect(()=>{
    dispatch(fetchTodos());
  },[dispatch]);
  return(
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 bg-[length:200%_200%] animate-gradient-shift flex justify-center items-center">
      <div className="w-full max-w-xl bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Redux Todo (RTK)</h1>
        <div className="mt-4">
          <TodoInput/>
        </div>
        {loading && <p className="mt-4 text-blue-600 font-semibold">Loading intial todos....</p>}
        {error && <p className="mt-4 text-red-600">Error: {error}</p>}
        <TodoList/>
      </div>
    </div>
  )
}