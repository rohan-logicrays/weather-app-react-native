import React from 'react';
import {View, StyleSheet} from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 2, // Height of the separator
    backgroundColor: '#e0e0e0', // Color of the separator
  },
});

export default Separator;
