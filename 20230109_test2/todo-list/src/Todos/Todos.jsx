import styled from "styled-components";
import TodoBody from "./TodoBody";
import TodoInput from "./TodoInput";
import TodoHeader from "./TodoHeader";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat({ id: action.id, text: action.text, done: false });
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, [
    { id: 1, text: "아침 먹기", done: true },
    { id: 2, text: "점심먹기", done: true },
    { id: 3, text: "저녁먹기", done: true },
  ]);

  return (
    <Container>
      <TodoHeader todos={todos} />
      <TodoBody todos={todos} dispatch={dispatch} />
      <TodoInput dispatch={dispatch} />
    </Container>
  );
}

const Container = styled.div``;

export default Todos;
