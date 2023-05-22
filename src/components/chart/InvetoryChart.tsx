import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {InvetoryStore} from '../../store/invetory.store';
import WebViewChart from './WebViewChart';
import TopHeader from '../header/TopHeader';
import strings from '../../utils/strings';

const InvetoryChart = () => {
  const invetoryData = InvetoryStore.invetoryData;
  return (
    <View style={styles.container}>
      <TopHeader title={strings.invetoryChart_title} />
      <WebViewChart data={invetoryData} />
    </View>
  );
};

export default observer(InvetoryChart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
