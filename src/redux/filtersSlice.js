import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  features: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },

    setForm: (state, action) => {
      if (state.form === action.payload) {
        state.form = "";
      } else {
        state.form = action.payload;
      }
    },

    toggleFeature: (state, action) => {
      const feature = action.payload;
      if (state.features.includes(feature)) {
        state.features = state.features.filter((f) => f !== feature);
      } else {
        state.features.push(feature);
      }
    },

    resetFilters: () => initialState,
  },
});

export const { setLocation, setForm, toggleFeature, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
