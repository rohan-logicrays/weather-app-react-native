// weatherReducer.js
import {createSlice} from '@reduxjs/toolkit';
import {fetchHomeCityWeather} from '../../services/api';

const homeCityWeather = createSlice({
  name: 'homeCityWeather',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Your other reducers here
  },
  extraReducers: builder => {
    builder
      .addCase(fetchHomeCityWeather.pending, state => {
        state.loading = true;
      })
      .addCase(fetchHomeCityWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchHomeCityWeather.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

export default homeCityWeather.reducer;
