import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, sizes} from '../../utils/constant';

type Props = {
  title: string;
};

const TopHeader = (props: Props) => {
  const {title} = props;
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  box: {
    height: sizes.PageHieght * 0.1,
    backgroundColor: colors.headerBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
});
