import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "auth/register",
  async (_, thunkAPI) => {
    try {
      
    } catch {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (_, thunkAPI) => {
    try {
      
    } catch {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      
    } catch {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      
    } catch {
      return thunkAPI.rejectWithValue(true);
    }
  }
);