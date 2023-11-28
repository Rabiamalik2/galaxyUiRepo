//import liraries
import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {View, Text, SafeAreaView, Alert} from 'react-native';

import styles from './styles';
import RouteNames from '../../../services/constants/route-names';
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
import VideoBackground from '../../../components/videoBackground';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-2';
// create a component
const db = SQLite.openDatabase('userDatabase.db', '1.0', '', 1);
const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [userList, setUserList] = useState([]);
  console.log('myuser:', userList);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isUser = async () => {
    const user = userList.find(
      item => item.email == email && item.password == password,
    );
    if (user) {
      const key = 'isUser';
      await AsyncStorage.setItem(key, JSON.stringify(user));
      Alert.alert(
        'Success',
        'Email and password are matching!',
        [
          {
            text: 'Ok',
            onPress: () =>
              navigation.navigate(RouteNames.navigatorNames.appNavigator, {
                screen: RouteNames.appRoutes.dashboardScreen,
              }),
          },
        ],
        {cancelable: false},
      );

      // const user = ;
      // console.log('user: ', user);
    }
  };
  useEffect(() => {
    getData();
  }, [isFocused]);
  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setUserList(temp);
      });
    });
  };
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
          <Text style={styles.textmain}>Welcome</Text>
          <Text style={styles.textUniverse}>Back</Text>
          <View style={{marginTop: responsiveHeight(20)}}>
            <Input
              placeholder="Email Address"
              Icon={<MaterialIcons name="email" style={styles.icon1S} />}
              value={email}
              onChangeText={txt => setEmail(txt)}
            />
            <Input
              placeholder="Password"
              secureTextEntry={hidePassword}
              value={password}
              onChangeText={txt => setPassword(txt)}
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
          <Button title={'Log In'} onPress={isUser} />
          <BottomText
            title={'Forgot Password?'}
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
export default LoginScreen;
