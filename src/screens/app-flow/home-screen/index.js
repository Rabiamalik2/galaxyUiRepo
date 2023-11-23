//import liraries
import React, {Component, useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import VideoBackground from '../../../components/videoBackground';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../components/button-component';
import BottomText from '../../../components/term';
import RouteNames from '../../../services/constants/route-names';
// create a component
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <VideoBackground source={require('../../../assets/images/vid1.mp4')} />
      <View style={styles.viewComp}>
        <Text style={styles.textmain}>Let's float in</Text>
        <Text style={styles.textUniverse}>Universe</Text>
        <Text style={styles.textWelcome}>Welcome</Text>
        <Text style={styles.textsub}>
          Unlock a universe of{'\n'}knowledge and adventure{'\n'}with your pass.
        </Text>
        <Button
          title={'Log In'}
          onPress={() =>
            navigation.navigate(RouteNames.navigatorNames.authNavigator, {
              screen: RouteNames.authRoutes.loginScreen,
            })
          }
        />
        <BottomText
          title={'Create new account'}
          onPress={() =>
            navigation.navigate(RouteNames.navigatorNames.authNavigator, {
              screen: RouteNames.authRoutes.signUpScreen,
            })
          }
        />
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
