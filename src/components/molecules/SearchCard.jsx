import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../atoms/Button';
import CustomTextInput from '../atoms/CustomTextInput';

const SearchCard = ({value, setValue, handlePress, label}) => {
  return (
    <View style={styles.container}>
      <CustomTextInput value={value} setValue={setValue} />
      <Button label={label} onPress={handlePress} />
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
