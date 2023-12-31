//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
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
import SQLite from 'react-native-sqlite-2';
import {useNavigation} from '@react-navigation/native';
// create a component
const db = SQLite.openDatabase('userDatabase.db', '1.0', '', 1);
const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const saveUser = () => {
    console.log(name, email, password);
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (name, email, password) VALUES (?,?,?)',
        [name, email, password],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('loginScreen'),
                },
              ],
              {cancelable: false},
            );
          } else Alert.alert('Registration Failed');
        },
        error => {
          console.log('errere', error);
        },
      );
    });
  };
  useEffect(() => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), email VARCHAR(50), password VARCHAR(50))',
              [],
            );
          }
        },
        error => {
          console.log(error);
        },
      );
    });
  }, []);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      // enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={50}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/children.png')}
          style={styles.image}>
          <View style={styles.viewComp}>
            <GoBack />
            <Text style={styles.textmain}>Let's</Text>
            <Text style={styles.textUniverse}>Start</Text>
            <View style={{marginTop: responsiveHeight(20)}}>
              <Input
                placeholder="Your Name"
                Icon={<FontAwesome name="user" style={styles.icon1S} />}
                value={name}
                onChangeText={txt => setName(txt)}
              />
              <Input
                placeholder="Email Address"
                Icon={<MaterialIcons name="email" style={styles.icon1S} />}
                value={email}
                onChangeText={txt => setEmail(txt)}
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
                value={password}
                onChangeText={txt => setPassword(txt)}
              />
            </View>
            <Button title={'Sign Up'} onPress={saveUser} />
            <BottomText
              title={'Terms and conditions'}
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
export default RegistrationScreen;
