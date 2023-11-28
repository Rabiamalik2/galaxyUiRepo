//import liraries
import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {View, Text, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import VideoBackground from '../../../components/videoBackground';
import BottomText from '../../../components/term';
import RouteNames from '../../../services/constants/route-names';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-2';
const db = SQLite.openDatabase('userDatabase.db', '1.0', '', 1);
// create a component
const DashboardScreen = () => {
  const navigation = useNavigation();
  const deleteUser = async () => {
    const key = 'isUser';
    const response = JSON.parse(await AsyncStorage.getItem(key));
    console.log('re', response);
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  table_user where email= (?)',
        [response.email],
        async (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            await AsyncStorage.removeItem(key);
            Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',

                  onPress: () => {
                    navigation.replace(
                      RouteNames.navigatorNames.authNavigator,
                      {
                        screen: RouteNames.authRoutes.loginScreen,
                      },
                    );
                  },
                },
              ],
              {cancelable: false},
            );
          } else {
            Aleralert('Please insert a valid User Id');
          }
        },
      );
    });
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
    <SafeAreaView style={styles.container}>
      <VideoBackground source={require('../../../assets/images/vid1.mp4')} />
      <View style={styles.viewComp}>
        <Text style={styles.textmain}>Welcome to the</Text>
        <Text style={styles.textUniverse}>Dashboard</Text>
        <BottomText
          title={'Update User Information'}
          onPress={() =>
            navigation.navigate(RouteNames.navigatorNames.authNavigator, {
              screen: RouteNames.authRoutes.updateUserScreen,
            })
          }
        />
        <BottomText title={'Delete User'} onPress={deleteUser} />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

/* <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={onDone}
      onSkip={onSkip}
    /> */
