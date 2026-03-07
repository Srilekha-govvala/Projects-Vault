import {createSlice, nanoid, createAsyncThunk} from "@reduxjs/toolkit";
export const fetchTodos=createAsyncThunk("todos/fetchTodos",async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    return await res.json()
})

const todosSlice =createSlice({
    name:"todos",
    initialState:{
        items:[], loading: false, error:null
    },
    reducers:{
        addTodo:{
            reducer(state,action){
                state.items.unshift(action.payload)
            },
            prepare(title){
                return{
                    payload:{
                        id:nanoid(), title,completed:false
                    }
                }
            }
        },
        toggleTodo(state,action){
            const todo=state.items.find((t)=>t.id===action.payload);
            if(todo) todo.completed=!todo.completed;
        },
        deleteTodo(state, action){
            state.items=state.items.filter((t)=>t.id!==action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTodos.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchTodos.fulfilled,(state,action)=>{
            state.loading=false;
            state.items=action.payload.map((t)=>({
                id:String(t.id),
                title:t.title,
                completed:t.completed
            }))
        })
        .addCase(fetchTodos.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error?.message||"Failed to load todos";
        })
    }
})
export const{addTodo,toggleTodo,deleteTodo}= todosSlice.actions;
export default todosSlice.reducer;