import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMe = createAsyncThunk("auth/getMe", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const token_type = localStorage.getItem("token_type");
    if (!token) {
      return thunkAPI.rejectWithValue("No token found");
    }
    const response = await axios.get(
      "https://umaoil.up.railway.app/api/clients/login",
      {
        headers: {
          Authorization: `${token_type} ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data || "Failed to fetch user data"
    );
  }
});
