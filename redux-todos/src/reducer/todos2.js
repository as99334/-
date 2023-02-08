import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "배우기", done: true },
  { id: 2, text: "배우기", done: true },
  { id: 3, text: "배우기", done: false },
];

const todoSlice = createSlice({
  name: "todos",
  initialStatem,
  reducers: {
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id === action.payload);
    },
  },
});

export const { removeTodo } = todoSlice.actions;

const todos = todoSlice.reducer;
export default todos;
