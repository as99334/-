import { useRef, useState } from "react";
import styled from "styled-components";

function TodoInput({ dispatch }) {
  const [text, setText] = useState("");
  const nextID = useRef(4);
  const inputRef = useRef();

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("할일을 입력해주세요");
      return;
    }
    dispatch({ type: "CREATE_TODO", id: nextID.current++, text });
    setText("");
    inputRef.current.focus();
  };

  console.log(text);

  return (
    <Container>
      <form onSubmit={handleSubmite}>
        <Input
          placeholder="할일을 입력해주세요."
          onChange={handleText}
          value={text}
          ref={inputRef}
        />
        <Button onClick={handleSubmite}>등록</Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.bd_color};
  padding: 10px;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 5px;

  border: 1px solid ${({ theme }) => theme.colors.bd_color};
  font-size: 0.8rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 5px 0;
  margin-top: 4px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.main_color};
  color: #fff;
  font-weight: 700;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover_color};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.active_color};
  }
`;

export default TodoInput;
