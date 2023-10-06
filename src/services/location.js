import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid} from 'react-native';

export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'Weather App needs access to your location.',
        buttonPositive: 'OK',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission granted');
      return true;
    } else {
      console.log('Location permission denied');
      return false;
    }
  } catch (err) {
    // console.warn(err);
    return false;
  }
}

// export default function getCurrentLocation() {
//   return new Promise((resolve, reject) => {
//     Geolocation.getCurrentPosition(info => info.coords);
//     Geolocation.getCurrentPosition(
//       position => {
//         const {latitude, longitude} = position.coords;
//         resolve({latitude, longitude});

//         return {latitude, longitude};
//       },
//       error => {
//         reject(error);
//       },
//       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//     );
//   });
// }

// const config = {
//   skipPermissionRequests: false,
//   authorizationLevel: 'always',
//   enableBackgroundLocationUpdates: true,
//   locationProvider: 'auto',
// };

// export function getCurrentLocation() {
//   console.log('callllleddR');
//   Geolocation.getCurrentPosition(info => {
//     const {latitude, longitude} = info.coords;
//     console.log('lat,long', latitude, longitude);
//   });
// }
let locationData = null;

// export function getLocationdata() {
//   Geolocation.getCurrentPosition(position => {
//     const {latitude, longitude} = position.coords;
//     console.log('longitude: ', longitude);
//     console.log('latitude: ', latitude);

//     locationData = {latitude, longitude};
//   });
// }

// export function getCurrentLocation() {
//   console.log('locationData', locationData);
//   return locationData;
// }
