import React, {useEffect} from 'react';
import {ActivityIndicator, ImageBackground, StyleSheet} from 'react-native';
import imageIndex from '../../images/imageIndex';
import ScreenNames from '../../navigation/ScreenNames';
import {navigate} from '../../navigation/navigationRef';
import {colors, sizes} from '../../utils/constant';
import {wait} from '../../utils/utils';

const Splash = () => {
  useEffect(() => {
    const onInit = async () => {
      wait(3000).then(() => {
        navigate(ScreenNames.homeScreen);
      });
    };
    onInit();
  }, []);
  return (
    <ImageBackground
      resizeMode="contain"
      source={imageIndex.splash()}
      style={styles.container}>
      <ActivityIndicator size="large" color={colors.colorSeafoamBlue} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: sizes.PageHieght,
    width: sizes.PageWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
