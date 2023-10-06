import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchCard from '../components/molecules/SearchCard';
import SearchTemplate from '../components/organisms/SearchTemplate';
import BG from '../assets/Background.png';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BG}
        resizeMode="cover"
        style={styles.bgImage}></ImageBackground>

      <SearchTemplate />
    </View>
  );
};

export default SearchScreen;

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
});
