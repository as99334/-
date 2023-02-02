import styled from "styled-components";
import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { theme } from "../style";

function TodoItem({ todo, dispatch }) {
  console.log(todo);
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", id: todo.id });
  };

  const handleRemove = () => {
    if (window.confirm("삭제하시겠습니까?"))
      dispatch({ type: "REMOVE_TODO", id: todo.id });
  };

  return (
    <Container done={todo.done}>
      <BtnCheck onClick={handleToggle}>
        {todo.done ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
      </BtnCheck>
      <p>{todo.text}</p>
      <BtnDelete>
        <BsTrash color="red" onClick={handleRemove} />
      </BtnDelete>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
  p {
    flex: 1;
    margin-left: 5px;
    text-decoration: ${({ done }) => done && "line-through"};
  }
`;
const BtnCheck = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.main_color};
  }
`;

const BtnDelete = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    svg {
      opacity: 0;
      cursor: pointer;
    }
    &:hover {
      svg {
        opacity: 1;
      }
    }
  }
`;

export default TodoItem;
