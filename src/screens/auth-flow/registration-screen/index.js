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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../services/constants/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Fonts from '../../../services/constants/fonts';
import Input from '../../../components/Text-input-component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/button-component';
import BottomText from '../../../components/term';
import GoBack from '../../../components/buttonGoBack';
import VideoBackground from '../../../components/videoBackground';
// create a component
const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      // enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={50}>
      <SafeAreaView style={styles.container}>
        <VideoBackground source={require('../../../assets/images/vid2.mp4')} />

        <View style={styles.viewComp}>
          <GoBack />
          <Text style={styles.textmain}>Let's</Text>
          <Text style={styles.textUniverse}>Start</Text>
          <View style={{marginTop: responsiveHeight(20)}}>
            <Input
              placeholder="Your Name"
              Icon={<FontAwesome name="user" style={styles.icon1S} />}
            />

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
            title={'Sign Up'}
            onPress={() =>
              navigation.navigate(RouteNames.navigatorNames.authNavigator, {
                screen: RouteNames.authRoutes.loginScreen,
              })
            }
          />
          <BottomText
            title={'Terms and conditions'}
            onPress={() =>
              navigation.navigate(RouteNames.navigatorNames.authNavigator, {
                screen: RouteNames.authRoutes.signUpScreen,
              })
            }
          />
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default RegistrationScreen;
