import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {STATE_STATUS, colors} from '../../utils/constant';
import {observer} from 'mobx-react';
import {InvetoryStore} from '../../store/invetory.store';

const Loader = () => {
  const isLoading = InvetoryStore.stateStatus === STATE_STATUS.PENDING;
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.colorSeafoamBlue} />
      </View>
    );
  } else return null;
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    opacity: 0.3,
    left: 0,
    right: 0,
    zIndex: 9,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.background,
  },
});
export default observer(Loader);
