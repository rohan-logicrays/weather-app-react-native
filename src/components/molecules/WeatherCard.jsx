import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addCity, removeCity} from '../../redux/slices/savedCitiesList';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../atoms/Button';
import Snackbar from 'react-native-snackbar';

const WeatherCard = ({
  city,
  temperature,
  weatherIcon,
  saveOption,
  weatherText,
  windSpeed,
  removeOption,
  refreshOption,
  handleRefreshClick,
  loading,
  error,
}) => {
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(addCity(city));
    Snackbar.show({
      text: `saved ${city} city`,
      duration: 2000,
      textColor: '#FFFFFF',
      backgroundColor: '#74C1C8',
    });
  };
  const handleRemove = () => {
    dispatch(removeCity(city));
    Snackbar.show({
      text: `removed ${city} city`,
      duration: 2000,
      textColor: '#FFFFFF',
      backgroundColor: '#74C1C8',
    });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <>
          <Text style={styles.errorText}>Please try to refresh</Text>
          <TouchableOpacity onPress={handleRefreshClick}>
            <Icon name="refresh-cw" size={25} color="#FFFFFF" />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.city}>{city}</Text>
          <Text style={styles.temp}>{temperature}°</Text>
          <Text style={styles.text}>{weatherText}°</Text>
          <View style={styles.wind}>
            <Icon name="wind" size={25} color="#FFFFFF" />
            <Text style={styles.windText}>{windSpeed}km/h</Text>
          </View>
          <Image source={{uri: `http:${weatherIcon}`}} style={styles.image} />
          {saveOption && <Button label="save city" onPress={handlePress} />}
          {removeOption && (
            <Button label="remove city" onPress={handleRemove} />
          )}
          {refreshOption && (
            <TouchableOpacity onPress={handleRefreshClick}>
              <Icon name="refresh-cw" size={25} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    alignItems: 'center',
    margin: 20,
    borderRadius: 15,
    backgroundColor: 'transparent',
    paddingVertical: 10,
    width: 'auto',
    height: 'auto',
  },
  city: {
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  temp: {
    fontSize: 96,
    // fontWeight: '700',
    color: 'white',
  },
  btn: {
    backgroundColor: '#9e0c39',
    borderWidth: 1,
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    opacity: 0.8,
  },
  wind: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 120,
  },
  windText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    opacity: 0.8,
  },
});

export default WeatherCard;
