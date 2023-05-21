import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {wait} from '../../utils/utils';
import {navigate} from '../../navigation/navigationRef';
import ScreenNames from '../../navigation/ScreenNames';

type Props = {};

const Splash = (props: Props) => {
  useEffect(() => {
    wait(3000).then(() => {
      navigate(ScreenNames.homeScreen);
    });
  }, []);
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
