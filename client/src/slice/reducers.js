import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, thunk_API) => {
    const data = await fetch(
      "https://lowkey-airbnb-service.onrender.com/profile",
      {
        method: "GET",
        credentials: "include",
      },
    );
    return await data.json();
  },
);
