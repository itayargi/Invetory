// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import Splash from '../screens/splash/Splash';
import ScreenNames from './ScreenNames';
import {navigationRef} from './navigationRef';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={ScreenNames.splash}>
        <Stack.Screen name={ScreenNames.homeScreen} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.splash} component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
