// src/reducer/counter.js

import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// 액션 타입 정의
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

// 액션 객체를 생성하는 함수.
export function increaseNum() {
  return { type: INCREASE };
}

export const decreaseNum = () => ({ type: DECREASE });

// export const increasement = createAction("counter/increasement");
// export const decreasement = createAction("counter/decreasement");

// console.log(increasement.type);

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case increasement.type:
      return state + action.payload;
    case decreasement.type:
      return state + action.payload;
    default:
      return state - action.payload;
  }
}

// const counter = createReducer(0, {
//   [increasement.type]: (state, action) => {
//     return state + action.payload;
//   },
//   [decreasement.type]: (state, action) => {
//     return state - action.payload;
//   },
// });

// const counter = createReducer(0, (builder) => {
//   builder
//     .addCase(increasement, (state, action) => {
//       return state + action.payload;
//     })
//     .addCase(decreasement, (state, action) => {
//       return state - action.payload;
//     });
// });

//액션 생성 함수와 리듀서를 동시에 만든다.
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increasement: (state, action) => state + action.payload,
    decreasement: (state, action) => state + action.payload,
  },
});

export const { increasement, decreasement } = counterSlice.actions;

const counter = counterSlice.reducer;

export default counter;
