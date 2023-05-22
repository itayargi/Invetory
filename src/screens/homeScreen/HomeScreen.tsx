import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useEffect} from 'react';
import InvetoryChart from '../../components/chart/InvetoryChart';
import Dashboard from '../../components/dashboard/Dashboard';
import ScreenNames from '../../navigation/ScreenNames';
import {InvetoryStore} from '../../store/invetory.store';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  useEffect(() => {
    InvetoryStore.getDataFromSheets();
  }, []);
  return (
    <Tab.Navigator tabBarPosition="bottom">
      <Tab.Screen name={ScreenNames.Dashboard} component={Dashboard} />
      <Tab.Screen name={ScreenNames.WebViewChart} component={InvetoryChart} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
