import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme: "light", // "light", "dark"
    notification: {
      show: false,
      message: "",
      type: "success" // "success", "error", "info"
    },
    sidebarOpen: true,
    selectedTodoId: null
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    showNotification(state, action) {
      state.notification = {
        show: true,
        message: action.payload.message,
        type: action.payload.type || "success"
      };
    },
    hideNotification(state) {
      state.notification.show = false;
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    selectTodo(state, action) {
      state.selectedTodoId = action.payload;
    },
    clearSelectedTodo(state) {
      state.selectedTodoId = null;
    }
  }
});

export const {
  toggleTheme,
  showNotification,
  hideNotification,
  toggleSidebar,
  selectTodo,
  clearSelectedTodo
} = uiSlice.actions;

export default uiSlice.reducer;
