import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';

interface MarqueeProps {
  text: string;
}

const AnimatedText: React.FC<MarqueeProps> = ({text}) => {
  const moveAnim = useRef(new Animated.Value(-1000)).current;
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveAnim, {
        toValue: screenWidth,
        duration: 5000,
        useNativeDriver: true,
      }),
    ).start();
  }, [moveAnim, screenWidth]);

  return (
    <Animated.Text
      style={[styles.marquee, {transform: [{translateX: moveAnim}]}]}>
      {text}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  marquee: {
    fontSize: 30,
  },
});

export default AnimatedText;
