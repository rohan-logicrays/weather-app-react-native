import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({value, setValue}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder="search for a city"
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 360,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    fontSize: 16,
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
  },
});
