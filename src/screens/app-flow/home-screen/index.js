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
import Button from '../../../components/button-component';
import BottomText from '../../../components/term';
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
