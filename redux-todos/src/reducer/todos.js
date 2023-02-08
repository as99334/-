import { createSelector, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "배우기", done: true },
  { id: 2, text: "배우기", done: true },
  { id: 3, text: "배우기", done: false },
];

export const CREATE = "CREATE";
export const REMOVE = "REMOVE";
export const TOGGLE = "TOGGLE";

export const toggleTodo = (id) => ({
  type: TOGGLE,
  payload: id,
});

export const removeTodo = (id) => ({
  type: REMOVE,
  payload: id,
});

export const createTodo = (text) => ({
  type: CREATE,
  payload: { id: nanoid(), text, done: false },
});

const getTotos = (state) => state.todos;

// reselext :골라낸 상태에서 다시 값을 골라낸다. => 이전 상태값이 변하지 안으면 재계산x
export const getundoneCount = createSelector(getTotos, (state) => {
  return state.filter((todo) => !todo.done).length;
});

export const TotalCount = createSelector(getTotos, (todos) => todos.length);

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return state.concat(action.payload);
    case REMOVE:
      return state.filter((todo) => todo.id === action.payload);
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};
