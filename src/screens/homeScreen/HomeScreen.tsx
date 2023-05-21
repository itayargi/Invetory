import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useEffect} from 'react';
import {getInvetoryRequest} from '../../api/api';
import InvetoryChart from '../../components/chart/InvetoryChart';
import Dashboard from '../../components/dashboard/Dashboard';
import ScreenNames from '../../navigation/ScreenNames';
import {InvetoryStore} from '../../store/invetory.store';
import {STATE_STATUS} from '../../utils/constant';
import {logDev} from '../../utils/utils';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  useEffect(() => {
    const getDataFromSheets = async () => {
      try {
        InvetoryStore.setStateStatus(STATE_STATUS.PENDING);
        const res = await getInvetoryRequest();
        let {values} = res;
        console.log('📢[HomeScreen.tsx:18]: values: ', values);
        let [, ...invetoryData] = values.map(data => ({
          name: data[0],
          age: data[1],
        }));
        console.log('📢 invetoryData: ', invetoryData);
        InvetoryStore.updateInvetory(invetoryData);
        InvetoryStore.setStateStatus(STATE_STATUS.SUCCESS);
      } catch (error) {
        InvetoryStore.setStateStatus(STATE_STATUS.ERROR);
        logDev('error getDataFromSheets: ', error);
      }
    };
    getDataFromSheets();
  }, []);
  return (
    <Tab.Navigator tabBarPosition="bottom">
      <Tab.Screen name={ScreenNames.Dashboard} component={Dashboard} />
      <Tab.Screen name={ScreenNames.InvetoryChart} component={InvetoryChart} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
