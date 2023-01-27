import { useReducer } from "react";
import { counterReducer } from "./counter";

function Reducer() {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    amount: 1,
  });

  const handleAmount = (e) => {
    const amount = parseInt(e.target.value);
    dispatch({ type: "CHAGE_AMOUNT", amount });
  };

  console.log(state);
  return (
    <div>
      <p>0</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <input type="number" onChange={handleAmount} />
    </div>
  );
}

export default Reducer;
