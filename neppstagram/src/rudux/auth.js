import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../api/auth";

const fetchUser = createAsyncThunk("user/fetchUser", getCurrentUser);

const userSlice = createSlice({
  name: "user",
  initialState: {
    initialState: {
      isLoading: true,
      data: null,
      isError: false,
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isError = false;
        state.isLoading = false;
      });
    },
  },
});

export default userSlice;
