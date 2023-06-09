/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import AppNavigation from './src/navigation/AppNavigation';
import Loader from './src/components/loader/Loader';
import ConnectionCheck from './src/components/connection/ConnectionCheck';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Loader />
      <AppNavigation />
      <ConnectionCheck />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
