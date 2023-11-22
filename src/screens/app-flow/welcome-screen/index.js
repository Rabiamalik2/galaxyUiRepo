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
import styles from './styles';
import OnBoarding from '../../../components/onboarding-component/onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../home-screen';
import LaunchScreen from '../launch-screen';
// create a component
const WelcomeScreen = () => {
  const [showSlider, setShowSlider] = useState(true);
  const getValue = async () => {
    const key = 'isOnboarding';
    const response = JSON.parse(await AsyncStorage.getItem(key));
    console.log('getRes', response);
    setShowSlider(response);
  };
  useEffect(() => {
    getValue();
  }, []);
  return <>{showSlider ? <LaunchScreen /> : <HomeScreen />}</>;
};

//make this component available to the app
export default WelcomeScreen;

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
