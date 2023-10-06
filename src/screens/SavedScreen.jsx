import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SavedCitiesTemplate from '../components/organisms/SavedCitiesTemplate';
import BG from '../assets/Background.png';

const SavedScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BG}
        resizeMode="cover"
        style={styles.bgImage}></ImageBackground>
      <Text style={styles.text}>Saved Cities</Text>
      <SavedCitiesTemplate />
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 28,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});
