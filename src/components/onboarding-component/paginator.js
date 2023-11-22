import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import React from 'react';
import Colors from '../../services/constants/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Paginator({data, scrollX}) {
  const {width} = useWindowDimensions();
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        bottom: 50,
        // alignItems: 'center',s
        justifyContent: 'center',
      }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 10, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[
              styles.dot,
              {
                width: dotWidth,
                opacity,
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: responsiveHeight(1),
    width: responsiveWidth(3),
    borderRadius: 10,
    borderColor: Colors.white,
    borderWidth: responsiveHeight(1),
    marginHorizontal: 5,
    backgroundColor: Colors.white,
  },
});
