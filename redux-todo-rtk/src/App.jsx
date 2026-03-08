import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterPanel from "./components/FilterPanel";
import Notification from "./components/Notification";
import { fetchTodos } from "./features/todos/todosSlice";
import { toggleTheme } from "./features/ui/uiSlice";

export default function App(){
  const dispatch=useDispatch();
  const {loading,error}=useSelector((state)=>state.todos);
  const {theme}=useSelector((state)=>state.ui);
  const {notification}=useSelector((state)=>state.ui);
  
  useEffect(()=>{
    dispatch(fetchTodos());
  },[dispatch]);

  return(
    <div className={`min-h-screen p-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400'} bg-[length:200%_200%] animate-gradient-shift flex justify-center items-center transition-colors duration-300`}>
      <div className={`w-full max-w-4xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white/95'} backdrop-blur-sm rounded-xl shadow-2xl p-6 transition-colors duration-300`}>
        {/* Header with theme toggle */}
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'}`}>Redux Todo (RTK)</h1>
          <button 
            onClick={() => dispatch(toggleTheme())}
            className={`px-4 py-2 rounded-lg font-semibold transition ${theme === 'dark' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-800 text-white'}`}
          >
            {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Notification Component (using ui slice) */}
        {notification.show && <Notification/>}

        {/* Filter Panel (using filter slice) */}
        <FilterPanel/>
        
        <div className="mt-4">
          <TodoInput/>
        </div>
        {loading && <p className={`mt-4 font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Loading intial todos....</p>}
        {error && <p className={`mt-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>Error: {error}</p>}
        <TodoList/>

        {/* Info Box showing multislice usage */}
        <div className={`mt-8 p-4 rounded-lg border-2 ${theme === 'dark' ? 'border-blue-600 bg-blue-900 text-blue-100' : 'border-blue-300 bg-blue-50 text-blue-800'}`}>
          <p className="font-semibold">📚 Multislice Demo:</p>
          <p className="text-sm mt-2">This app uses 3 Redux Slices:</p>
          <ul className="text-sm mt-2 ml-4">
            <li>✓ <code className={theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}>todos</code> - Todo items & async operations</li>
            <li>✓ <code className={theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}>filter</code> - Search & filter logic</li>
            <li>✓ <code className={theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}>ui</code> - Theme, notifications, UI state</li>
          </ul>
        </div>
      </div>
    </div>
  )
}