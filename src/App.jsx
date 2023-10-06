import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import SavedScreen from './screens/SavedScreen';
import {Provider} from 'react-redux';
import store from './redux/store';
import MyTabBar from './components/organisms/MyTabBar';
const Tab = createBottomTabNavigator();
import BG from './assets/Background.png';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const persistor = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ImageBackground source={BG} resizeMode="cover" style={styles.bgImage}>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Home"
              tabBar={props => <MyTabBar {...props} />}>
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
              />
              <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{tabBarHideOnKeyboard: true, headerShown: false}}
              />
              <Tab.Screen
                name="Saved"
                component={SavedScreen}
                options={{headerShown: false}}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </ImageBackground>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  icon: {
    height: 200,
    width: 200,
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
