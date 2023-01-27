// /state/todos.js

let nextId = 4;
export function todosReducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat({ id: nextId++, text: action.text, done: false });
    default:
      return state;
  }
}
