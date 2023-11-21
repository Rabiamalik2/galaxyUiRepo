//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';
import Fonts from '../../../services/constants/fonts';
import Colors from '../../../services/constants/colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
// create a component
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: Fonts.PoppinsRegular,
          color: Colors.white,
          fontSize: responsiveFontSize(5),
        }}>
        LoginScreen
      </Text>
    </View>
  );
};

//make this component available to the app
export default LoginScreen;
