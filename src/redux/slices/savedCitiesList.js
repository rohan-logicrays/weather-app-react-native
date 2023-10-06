import {createSlice} from '@reduxjs/toolkit';

const savedCitiesList = createSlice({
  name: 'savedCitiesList',
  initialState: {cities: []},
  reducers: {
    addCity: (state, action) => {
      const newCity = action.payload;
      if (!state.cities.includes(newCity)) {
        state.cities.push(newCity);
      }
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter(city => city !== action.payload);
    },
  },
});

export const {addCity, removeCity} = savedCitiesList.actions;

export default savedCitiesList.reducer;
