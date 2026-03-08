import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import filterReducer from "../features/filter/filterSlice";
import uiReducer from "../features/ui/uiSlice";

export const store=configureStore({
    reducer:{
        todos:todosReducer,
        filter:filterReducer,
        ui:uiReducer
    }
})