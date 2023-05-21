import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {InvetoryStore} from '../../store/invetory.store';
import RenderPersons from './RenderPersons';
import TopHeader from '../header/TopHeader';

const Dashboard = () => {
  const invetoryData = InvetoryStore.invetoryData;

  return (
    <View style={styles.container}>
      <TopHeader title="title" />
      <RenderPersons data={invetoryData} />
    </View>
  );
};

export default observer(Dashboard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
