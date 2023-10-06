import {combineReducers} from 'redux';
import weatherReducer from '../slices/weatherReducer';
import homeCityWeatherReducer from '../slices/homeCityWeatherReducer';
import savedCitiesList from '../slices/savedCitiesList';

const rootReducer = combineReducers({
  weather: weatherReducer,
  homeCityWeather: homeCityWeatherReducer,
  savedCitiesList: savedCitiesList,
});

export default rootReducer;
