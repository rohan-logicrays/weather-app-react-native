import {
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeTemplate from '../components/organisms/HomeTemplate';
import BG from '../assets/Background.png';

import {requestLocationPermission} from '../services/location';
import Button from '../components/atoms/Button';
import Geolocation from '@react-native-community/geolocation';

const HomeScreen = ({navigation}) => {
  const [location, setLocation] = useState({});
  const [permissionDenied, setPermissionDenied] = useState(false);
  function getLocationdata() {
    Geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      setLocation({latitude, longitude});
    });
  }
  useEffect(() => {
    const checkPermission = async () => {
      const granted = await requestLocationPermission();
      if (granted) {
        getLocationdata();
      } else {
        // Permission denied
        setPermissionDenied(true);
      }
    };

    checkPermission();
  }, []);

  function openAppSettings() {
    Linking.openSettings();
  }

  const handleRefreash = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={BG} resizeMode="cover" style={styles.bgImage} />
      {permissionDenied ? (
        <>
          <TouchableOpacity onPress={openAppSettings}>
            <Text style={styles.permission}>
              Click to provide location permission
            </Text>
          </TouchableOpacity>
          <Button label="Refresh" onPress={handleRefreash} />
        </>
      ) : (
        <HomeTemplate location={location} />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A259FF',
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  permission: {
    fontSize: 21,
    color: '#FFFFFF',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
