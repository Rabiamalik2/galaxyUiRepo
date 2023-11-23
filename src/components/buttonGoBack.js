import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../services/constants/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fonts from '../services/constants/fonts';
import {useNavigation} from '@react-navigation/native';
const GoBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.transparent,
        height: responsiveHeight(5),
        width: responsiveWidth(23),
        borderRadius: responsiveWidth(2),
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
      }}
      onPress={() => navigation.goBack()}>
      <FontAwesome
        name="long-arrow-left"
        style={{
          // marginLeft: responsiveHeight(1),
          // marginTop: responsiveHeight(0.1),
          fontSize: responsiveFontSize(3.3),
          color: Colors.white,
          fontFamily: Fonts.PoppinsExtraBold,
        }}
      />
    </TouchableOpacity>
  );
};

export default GoBack;

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
