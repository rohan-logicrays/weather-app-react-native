import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_ENDPOINT =
  'http://api.weatherapi.com/v1/current.json?key=24777d309ae341f1b52115846230410';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async cityName => {
    try {
      const response = await axios.get(`${API_ENDPOINT}&q=${cityName}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const fetchHomeCityWeather = createAsyncThunk(
  'weather/fetchHomeCityWeatherData',
  async location => {
    const {latitude, longitude} = location;
    try {
      const response = await axios.get(
        `${API_ENDPOINT}&q=${latitude},${longitude}`,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const fetchCityWeatherData = async cityName => {
  try {
    const response = await axios.get(`${API_ENDPOINT}&q=${cityName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
