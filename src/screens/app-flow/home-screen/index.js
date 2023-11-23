//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Video from 'react-native-video';
import {useNavigation, useRoute} from '@react-navigation/native';
import RouteNames from '../../../services/constants/route-names';
// create a component
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={require('../../../assets/images/vid1.mp4')}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
      <View style={styles.viewComp}>
        <Text style={styles.textmain}>Let's float in</Text>
        <Text style={styles.textUniverse}>Universe</Text>
        <Text style={styles.textWelcome}>Welcome</Text>
        <Text style={styles.textsub}>
          Unlock a universe of{'\n'}knowledge and adventure{'\n'}with your pass.
        </Text>
        <TouchableOpacity
          style={[styles.loginTo, {flexDirection: 'row'}]}
          onPress={() =>
            navigation.navigate(RouteNames.navigatorNames.authNavigator, {
              screen: RouteNames.authRoutes.loginScreen,
            })
          }>
          <Text style={styles.loginText}>Log In</Text>
          <AntDesign name="arrowright" style={styles.iconArrowright} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.newAccTo}
          onPress={() =>
            navigation.navigate(RouteNames.navigatorNames.authNavigator, {
              screen: RouteNames.authRoutes.signUpScreen,
            })
          }>
          <Text style={styles.newAccText}>Create new account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

/* <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={onDone}
      onSkip={onSkip}
    /> */
