//import liraries
import React, {Component, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Fonts from '../../services/constants/fonts';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../services/constants/colors';
import Paginator from './paginator';
// create a component
const OnBoardingItem = ({item}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
        height: 100,
      }}>
      <ImageBackground
        source={item.image}
        style={[styles.image, {resizeMode: 'cover'}]}>
        <View
          style={{
            marginHorizontal: responsiveHeight(3),
            marginTop: responsiveHeight(2),
          }}>
          <Text
            style={{
              marginTop: responsiveHeight(8),
              color: Colors.white,
              fontSize: responsiveFontSize(5),
              fontFamily: Fonts.PoppinsMedium,
            }}>
            {item.title1}
          </Text>
          <Text
            style={{
              color: Colors.white,
              fontSize: responsiveFontSize(7),
              fontFamily: Fonts.PoppinsBold,
              marginTop: responsiveHeight(-3),
            }}>
            {item.title2}
          </Text>
          <Text
            style={{
              color: Colors.white,
              marginTop: responsiveHeight(-4),
              fontSize: responsiveFontSize(7),
              fontFamily: Fonts.PoppinsBold,
            }}>
            {item.title3}
          </Text>
          <Text style={styles.text}>{item.text}</Text>
          {item.isFirstScreen ? (
            <View>
              <TouchableOpacity
                style={{
                  marginTop: responsiveHeight(40),
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: responsiveWidth(80),
                  height: responsiveHeight(7),
                  borderRadius: responsiveFontSize(2),
                  backgroundColor: Colors.white,
                  flexDirection: 'row',
                }}
                onPress={() => {
                  item.isFirstScreen = false;
                }}>
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: responsiveFontSize(2),
                    fontFamily: Fonts.PoppinsBold,
                  }}>
                  Start Learning
                </Text>
                <AntDesign
                  name="arrowright"
                  style={{
                    marginLeft: responsiveHeight(1),
                    marginTop: responsiveHeight(0.1),
                    fontSize: responsiveFontSize(2),
                    color: Colors.black,
                    fontFamily: Fonts.PoppinsExtraBold,
                  }}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <Paginator data={slides} scrollX={scrollX} />
          )}
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
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.white,
  },
});
