import React from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, sizes} from '../../utils/constant';
type Props = {
  title: string;
};

const TopHeader = (props: Props) => {
  const {title} = props;
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.box}>
      <Text style={styles.text}>{title}</Text>
    </LinearGradient>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  box: {
    height: sizes.PageHieght * 0.1,
    width: sizes.PageWidth,
    alignSelf: 'center',
    backgroundColor: colors.headerBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: colors.white,
  },
});
