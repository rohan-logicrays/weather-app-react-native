import {StyleSheet, Text, View, Keyboard} from 'react-native';
import React, {useState} from 'react';
import SearchCard from '../molecules/SearchCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherData} from '../../services/api';
import WeatherCard from '../molecules/WeatherCard';

const SearchTemplate = () => {
  const [searchText, setSearchText] = useState('');
  const {data, loading, error} = useSelector(({weather}) => weather);
  const dispatch = useDispatch();
  const getSearchWeatherData = () => {
    Keyboard.dismiss();
    setSearchText('');
    dispatch(fetchWeatherData(searchText));
  };
  return (
    <View>
      <SearchCard
        value={searchText}
        setValue={setSearchText}
        handlePress={getSearchWeatherData}
        label="Search"
      />
      {data && (
        <WeatherCard
          city={data?.location?.name}
          temperature={data?.current?.temp_c}
          weatherIcon={data?.current?.condition?.icon}
          windSpeed={data?.current?.wind_kph}
          saveOption={true}
        />
      )}
    </View>
  );
};

export default SearchTemplate;

const styles = StyleSheet.create({});
