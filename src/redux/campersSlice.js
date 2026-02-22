import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ page = 1, limit = 4 } = {}, thunkAPI) => {
    try {
      const response = await api.get("/campers", {
        params: { page, limit },
      });
      const data = response.data.items ? response.data.items : response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  hasMore: true,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        const page = action.meta.arg?.page || 1;
        const limit = action.meta.arg?.limit || 4;
        if (page === 1) {
          state.items = action.payload;
        } else {
          state.items = [...state.items, ...action.payload];
        }

        if (action.payload.length < limit) {
          state.hasMore = false;
        } else {
          state.hasMore = true;
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
