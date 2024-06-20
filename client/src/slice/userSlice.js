import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./reducers";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
    email: null,
    id: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload) {
        const { name, email, id } = action.payload;
        return (state = { name, email, id });
      }
    });
  },
});

export default userSlice.reducer;

export const { addUser } = userSlice.actions;
