import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
  "auth/register",
  async (values, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", values);
      axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (values, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", values);
      axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const res = await axios.post("/users/logout");
    axios.defaults.headers.common.Authorization = "";
  } catch {
    return thunkAPI.rejectWithValue(true);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
    } catch {
      return thunkAPI.rejectWithValue(true);
    }
  }
);
