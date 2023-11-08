import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerService from "./customerService";

// Create an async thunk for fetching users
export const getUsers = createAsyncThunk("customer/getCustomers", async (_, thunkAPI) => {
  try {
    const response = await customerService.getUsers();
    return response.data; // Assuming your API response contains the data you want
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  customers: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// Define the customerSlice
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {}, // You can add reducers here if needed
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.customers = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message; // Use action.error.message to get the error message
      });
  },
});

export default customerSlice.reducer;
