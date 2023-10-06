import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function MyTabBar({state, descriptors, navigation}) {
  const [isKeyboardActive, setKeyboardActive] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => {
        setKeyboardActive(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardActive(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAwareScrollView
      style={styles.tabBarContainer}
      contentContainerStyle={[
        styles.tabBar,
        isKeyboardActive ? styles.tabBarHidden : null,
      ]}
      enableOnAndroid={true}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabBarOptions,
              {
                backgroundColor: isFocused ? '#74B2B7' : '#0ED2F7',
              },
            ]}>
            <Icon
              name={
                label === 'Home'
                  ? 'home'
                  : label === 'Search'
                  ? 'search'
                  : 'save'
              }
              size={25}
              color="#FFFFFF"
              style={styles.icon}
            />
            <Text
              style={[
                {color: isFocused ? '#FFFFFF' : '#FFFFFF'},
                styles.tabText,
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBar: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
  },
  tabBarHidden: {
    display: 'none',
  },
  tabBarOptions: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  tabText: {
    textAlign: 'center',
  },
  icon: {
    textAlign: 'center',
  },
});

export default MyTabBar;
