import React, {Component, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../services/constants/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Fonts from '../../services/constants/fonts';
const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {flexDirection: 'row'}]}
      onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
      <AntDesign name="arrowright" style={styles.buttonIcon} />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginTop: responsiveHeight(3),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    borderRadius: responsiveFontSize(2),
    backgroundColor: Colors.white,
  },
  buttonTitle: {
    color: Colors.black,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.PoppinsBold,
  },
  buttonIcon: {
    marginLeft: responsiveHeight(2),
    marginTop: responsiveHeight(-0.2),
    fontSize: responsiveFontSize(2),
    color: Colors.black,
    fontFamily: Fonts.PoppinsBlack,
  },
});
