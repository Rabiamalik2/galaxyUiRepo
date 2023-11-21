//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';
import Colors from '../../../services/constants/colors';
import slides from '../../../components/data/slides';
import OnBoarding from '../../../components/onboarding-component/onboarding';

// create a component
const HomeScreen = () => {
  <View style={styles.container}>
    <Text>HomeScreen</Text>
  </View>;
};

export default HomeScreen;

/* <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={onDone}
      onSkip={onSkip}
    /> */
