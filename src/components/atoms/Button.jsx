import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const Button = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#74B2B7',
    width: 150,
    borderRadius: 10,
    padding: 2,
  },
  label: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
