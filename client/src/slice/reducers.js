import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, thunk_API) => {
    const data = await fetch("http://localhost:5001/profile", {
      method: "GET",
      credentials: "include",
    });
    return await data.json();
  },
);
