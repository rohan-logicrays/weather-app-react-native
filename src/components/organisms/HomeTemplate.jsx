import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import WeatherCard from '../molecules/WeatherCard';
import {fetchHomeCityWeather} from '../../services/api';
import SearchCard from '../molecules/SearchCard';
import {useDispatch, useSelector} from 'react-redux';

const HomeTemplate = ({location}) => {
  const {data, loading, error} = useSelector(state => state.homeCityWeather);
  const dispatch = useDispatch();
  const getHomeWeatherData = () => {
    dispatch(fetchHomeCityWeather(location));
  };
  useEffect(() => {
    if (location) {
      getHomeWeatherData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {/* <Text style={{fontSize: 24}}>Weather App</Text> */}
      {data && (
        <WeatherCard
          city={data?.location?.name}
          temperature={data?.current?.temp_c}
          weatherIcon={data?.current?.condition?.icon}
          weatherText={data?.current?.condition?.text}
          windSpeed={data?.current?.wind_kph}
          refreshOption={true}
          handleRefreshClick={getHomeWeatherData}
          loading={loading}
          error={error}
        />
      )}
    </View>
  );
};

export default HomeTemplate;
