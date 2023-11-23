//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../../services/constants/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Fonts from '../../../services/constants/fonts';
import styles from './styles';
import OnBoarding from '../../../components/onboarding-component/onboarding';
import {useNavigation, useRoute} from '@react-navigation/native';
// create a component
const LaunchScreen = () => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const onButtonClick = () => {
    setShow(true);
  };
  return (
    <>
      {show ? (
        <View style={styles.container}>
          <OnBoarding />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <ImageBackground
            source={require('../../../assets/images/children.png')}
            style={[styles.image, {resizeMode: 'cover'}]}>
            <View style={styles.viewComp}>
              <Text
                style={{
                  marginTop: responsiveHeight(8),
                  color: Colors.white,
                  fontSize: responsiveFontSize(5),
                  fontFamily: Fonts.PoppinsMedium,
                }}>
                Virtual
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: responsiveFontSize(7),
                  fontFamily: Fonts.PoppinsBold,
                  marginTop: responsiveHeight(-3),
                }}>
                Galaxy
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  marginTop: responsiveHeight(-4),
                  fontSize: responsiveFontSize(7),
                  fontFamily: Fonts.PoppinsBold,
                }}>
                Explorer
              </Text>
              <Text style={styles.textsub}>
                We will learn all of the scientific{'\n'}disciplines that
                involve.
              </Text>
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
                onPress={() => onButtonClick()}>
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
          </ImageBackground>
        </SafeAreaView>
      )}
    </>
  );
};

//make this component available to the app
export default LaunchScreen;

// <SafeAreaView style={styles.container}>
//           <ImageBackground
//             source={require('../../../assets/images/children.png')}
//             style={[styles.image, {resizeMode: 'cover'}]}>
//             <View style={styles.viewComp}>
//               <Text style={styles.textmain}>Let's float in</Text>
//               <Text style={styles.textUniverse}>Universe</Text>
//               <Text style={styles.textWelcome}>Welcome</Text>
//               <Text style={styles.textsub}>
//                 Unlock a universe of{'\n'}knowledge and adventure{'\n'}with your
//                 pass.
//               </Text>
//               <TouchableOpacity
//                 style={[styles.loginTo, {flexDirection: 'row'}]}>
//                 <Text style={styles.loginText}>Log In</Text>
//                 <AntDesign name="arrowright" style={styles.iconArrowright} />
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.newAccTo}>
//                 <Text style={styles.newAccText}>Create new account</Text>
//               </TouchableOpacity>
//             </View>
//           </ImageBackground>
//         </SafeAreaView>
