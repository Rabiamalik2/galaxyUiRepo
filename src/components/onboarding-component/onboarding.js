import React, {Component, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Animated,
} from 'react-native';
import styles from './styles';
import slides from '../data/slides';
import OnBoardingItem from './onboardingItem';
import Paginator from './paginator';
import {SafeAreaView} from 'react-native-safe-area-context';
// create a component
const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const slidesRef = useRef(null);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={slides}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator
          bounces={false}
          renderItem={({item}) => <OnBoardingItem item={item} />}
          keyExtractor={item => item.key}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default OnBoarding;
//  <Paginator data={slides} scrollX={scrollX} />
