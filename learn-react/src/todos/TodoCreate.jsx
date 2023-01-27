import { useState } from "react";
function TodoCreate({ dispatch }) {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleCreate = (e) => {
    e.preventDefault(); //태그의 기본 기능 시행 x
    if (text === "") {
      // 빈문자열일 때, 경고창 출력 후 함수 종료.
      alert("할 일을 입력해 주세요");
      return;
    }
    dispatch({ type: "CREATE_TODO", text });
  };

  return (
    <div>
      <form onSubmit={handleCreate}>
        <input type="text" onChange={handleInput} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default TodoCreate;
