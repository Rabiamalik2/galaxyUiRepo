//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import Fonts from '../../services/constants/fonts';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../../services/constants/colors';
// create a component
const OnBoardingItem = ({item}) => {
  return (
    <SafeAreaView
      style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
      <ImageBackground
        source={item.image}
        style={[styles.image, {resizeMode: 'cover'}]}>
        <View
          style={{
            marginHorizontal: responsiveHeight(3),
            marginVertical: responsiveHeight(3),
          }}>
          <Text>{item.title1}</Text>
          <Text>{item.title2}</Text>
          <Text>{item.title3}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

//make this component available to the app
export default OnBoardingItem;

// define your styles
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    // justifyContent: 'center',
    // bottom: -19,
  },
  text: {
    fontFamily: Fonts.PoppinsBold,
    color: Colors.white,
  },
});
