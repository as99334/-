function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={TodoList.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
