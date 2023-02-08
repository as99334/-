import { useDispatch } from "react-redux";
import { removeTodo } from "../reducer/todos2";

function TodoItem({ todo }) {
  const { id, text, done } = todo;
  const dispatch = useDispatch();

  return (
    <li style={{ textDecoration: done && "line-through" }}>
      <span>{text}</span>
      <button onClick={() => dispatch(removeTodo(id))}>삭제</button>
    </li>
  );
}

export default TodoItem;
