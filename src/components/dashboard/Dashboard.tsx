import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InvetoryStore} from '../../store/invetory.store';
import strings from '../../utils/strings';
import TopHeader from '../header/TopHeader';
import Table from './Table';

const Dashboard = () => {
  const invetoryobj = InvetoryStore.invetoryObj;

  return (
    <View style={styles.container}>
      <TopHeader title={strings.dashboard_title} />
      <Text style={styles.title}>{strings.dashboard_userText}</Text>

      <Table
        data={invetoryobj?.data}
        headers={invetoryobj?.headers}
        style={styles.table}
      />
    </View>
  );
};

export default observer(Dashboard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
  },
  table: {
    paddingTop: 20,
  },
});
