import React from 'react';
import {NavigationContainerRef, ParamListBase} from '@react-navigation/native';

type RootStackParamList = {
  splash: undefined;
  homeScreen: undefined;
  Dashboard: undefined;
  InvetoryChart: undefined;
  // Add more routes here
};

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export function navigate<RouteName extends string>(
  route: RouteName,
  params?: ParamListBase[RouteName],
) {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.navigate(route, params);
  }
}

export function resetAndNavigate(route: string) {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.reset({
      index: 0,
      routes: [{name: route}],
    });
  }
}

export function goBack() {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.goBack();
  }
}
