import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {colors} from '../../utils/constant';
import imageIndex from '../../images/imageIndex';

const ConnectionCheck: React.FC = () => {
  const [isConnected, setConnected] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnected(state.isConnected!);
    });

    // Cleanup on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  if (!isConnected) {
    return (
      <View style={styles.container}>
        <Image source={imageIndex.noConnection()} style={styles.image} />
        <Text style={styles.text}>
          An internet connection is required to continue
        </Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: 120,
    height: 120,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ConnectionCheck;
