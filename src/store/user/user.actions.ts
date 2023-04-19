import { IUser } from "./../../types/user.types";
// fake query

import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = (userId: number): Promise<IUser> =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "John" }), 1000)
  );

// fake query

export const getUserById = createAsyncThunk<IUser, number>(
  "users/by-id",
  async (userId, thunkApi) => {
    try {
      const res = await fetchUserById(userId);
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
