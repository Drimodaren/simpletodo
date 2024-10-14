import { createSlice } from "@reduxjs/toolkit";
export interface initialState {
  id: number;
  text: string;
  completed: boolean;
}
const todoSlice = createSlice({
  name: "todos",
  initialState: Array<initialState>,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: initialState = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
