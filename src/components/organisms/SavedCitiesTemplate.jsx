import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {fetchCityWeatherData} from '../../services/api';
import WeatherCard from '../molecules/WeatherCard';
import Separator from '../atoms/Separator';

const SavedCitiesTemplate = () => {
  const {cities} = useSelector(state => state.savedCitiesList);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const getCitiesWeatherData = async () => {
      const updatedWeatherData = [];

      // Use Promise.all to fetch weather data for all cities concurrently
      await Promise.all(
        cities.map(async city => {
          try {
            const cityWeather = await fetchCityWeatherData(city);
            updatedWeatherData.push({city, data: cityWeather});
          } catch (error) {
            // Handle errors if any
            console.error(`Error fetching weather data for ${city}:`, error);
          }
        }),
      );

      setWeatherData(updatedWeatherData);
    };

    getCitiesWeatherData();
  }, [cities]);

  return (
    <View>
      <FlatList
        data={weatherData}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item?.data?.location?.lat}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={
          <View style={{height: 60, marginBottom: 15}}></View>
        }
        renderItem={({item}) => {
          return (
            <WeatherCard
              city={item?.city}
              temperature={item?.data?.current?.temp_c}
              weatherIcon={item?.data?.current?.condition?.icon}
              windSpeed={item?.data?.current?.wind_kph}
              removeOption={true}
            />
          );
        }}
      />
    </View>
  );
};

export default SavedCitiesTemplate;
