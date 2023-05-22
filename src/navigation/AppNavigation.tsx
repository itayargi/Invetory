import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import Splash from '../screens/splash/Splash';
import ScreenNames from './ScreenNames';
import {navigationRef} from './navigationRef';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  const navigatorParams = {
    screenOptions: {headerShown: false},
    initialRouteName: ScreenNames.splash,
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator {...navigatorParams}>
        <Stack.Screen name={ScreenNames.splash} component={Splash} />
        <Stack.Screen name={ScreenNames.homeScreen} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
