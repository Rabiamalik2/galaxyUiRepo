//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import RouteNames from '../../../services/constants/route-names';
import Colors from '../../../services/constants/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Fonts from '../../../services/constants/fonts';
import Input from '../../../components/Text-input-component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// create a component
const RegistrationScreen = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      // enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={50}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/space.png')}
          style={[styles.image, {resizeMode: 'cover'}]}>
          <View style={styles.viewComp}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.transparent,
                height: responsiveHeight(5),
                width: responsiveWidth(23),
                borderRadius: responsiveWidth(2),
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.5,
              }}>
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
            <Text style={styles.textmain}>Let's</Text>
            <Text style={styles.textUniverse}>Start</Text>
            <View style={{marginTop: responsiveHeight(20)}}>
              <Input placeholder="Your Name" name />
              <Input placeholder="Email Address" email />
              <Input placeholder="Password" password />
            </View>
            <TouchableOpacity
              style={[styles.loginTo, {flexDirection: 'row'}]}
              onPress={() =>
                navigation.navigate(RouteNames.navigatorNames.authNavigator, {
                  screen: RouteNames.authRoutes.loginScreen,
                })
              }>
              <Text style={styles.loginText}>Sign Up</Text>
              <AntDesign name="arrowright" style={styles.iconArrowright} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forgotPassTo}
              onPress={() =>
                navigation.navigate(RouteNames.navigatorNames.authNavigator, {
                  screen: RouteNames.authRoutes.signUpScreen,
                })
              }>
              <Text style={styles.forgotPassText}>Terms and conditions</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default RegistrationScreen;
