import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ page = 1, limit = 4 } = {}, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const { location, form, features } = state.filters;

      const params = {
        page,
        limit,
      };

      if (location.trim() !== "") {
        params.location = location.trim();
      }

      if (form !== "") {
        params.form = form;
      }

      features.forEach((feature) => {
        if (feature === "automatic") {
          params.transmission = "automatic";
        } else {
          params[feature] = true;
        }
      });

      const response = await api.get("/campers", { params });
      const data = response.data.items ? response.data.items : response.data;
      return data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return [];
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/campers/${id}`);
      return response.data;
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
  currentCamper: null,
  isDetailsLoading: false,
  detailsError: null,
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
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.isDetailsLoading = true;
        state.detailsError = null;
        state.currentCamper = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isDetailsLoading = false;
        state.currentCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isDetailsLoading = false;
        state.detailsError = action.payload;
      });
  },
});

export default campersSlice.reducer;
