//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../../components/button-component';
import BottomText from '../../../components/term';
import GoBack from '../../../components/buttonGoBack';
// create a component
const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
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
            <GoBack />
            <Text style={styles.textmain}>Welcome</Text>
            <Text style={styles.textUniverse}>Back</Text>
            <View style={{marginTop: responsiveHeight(20)}}>
              <Input
                placeholder="Email Address"
                Icon={<MaterialIcons name="email" style={styles.icon1S} />}
              />
              <Input
                placeholder="Password"
                secureTextEntry={hidePassword}
                Icon={
                  <MaterialIcons
                    onPress={() => {
                      setHidePassword(!hidePassword);
                    }}
                    name={hidePassword ? 'lock-open' : 'lock-outline'}
                    style={styles.icon1S}
                  />
                }
              />
            </View>
            <Button
              title={'Log In'}
              onPress={() =>
                navigation.navigate(RouteNames.navigatorNames.authNavigator, {
                  screen: RouteNames.authRoutes.loginScreen,
                })
              }
            />
            <BottomText
              title={'Forgot Password?'}
              onPress={() =>
                navigation.navigate(RouteNames.navigatorNames.authNavigator, {
                  screen: RouteNames.authRoutes.signUpScreen,
                })
              }
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default LoginScreen;
