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
import Input from '../../../components/Text-input-component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/button-component';
import SQLite from 'react-native-sqlite-2';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
const db = SQLite.openDatabase('userDatabase.db', '1.0', '', 1);
const UpdateUserScreen = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setDetails = async () => {
    const key = 'isUser';
    const response = JSON.parse(await AsyncStorage.getItem(key));
    setName(response.name);
    setEmail(response.email);
    setPassword(response.password);
  };
  const updateUser = async () => {
    const key = 'isUser';
    const response = JSON.parse(await AsyncStorage.getItem(key));
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE table_user set name=?, email=? , password=? where user_id=?',
        [name, email, password, response.user_id],
        async (tx, results) => {
          await AsyncStorage.setItem(
            key,
            JSON.stringify([name, email, password, response.user_id]),
          );
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () =>
                    navigation.navigate(
                      RouteNames.navigatorNames.appNavigator,
                      {
                        screen: RouteNames.appRoutes.dashboardScreen,
                      },
                    ),
                },
              ],
              {cancelable: false},
            );
          } else Alert.alert('Updation Failed');
        },
      );
    });
  };
  useEffect(() => {
    setDetails();
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
            <Button title={'Update User'} onPress={updateUser} />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default UpdateUserScreen;
