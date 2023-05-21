import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {InvetoryStore} from '../../store/invetory.store';
import WebViewChart from './WebViewChart';

const InvetoryChart = () => {
  const invetoryData = InvetoryStore.invetoryData;
  console.log('📢 invetoryData: ', invetoryData);
  return (
    <View style={styles.container}>
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
