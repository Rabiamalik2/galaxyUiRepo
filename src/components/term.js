import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../services/constants/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Fonts from '../services/constants/fonts';
const BottomText = ({onPress, title}) => {
  return (
    <TouchableOpacity
      style={[styles.bottomButton, {flexDirection: 'row'}]}
      onPress={onPress}>
      <Text style={styles.bottomButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BottomText;

const styles = StyleSheet.create({
  bottomButton: {
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonText: {
    color: Colors.white,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.PoppinsMedium,
    textDecorationLine: 'underline',
  },
});
