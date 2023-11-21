import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouteNames from '../constants/route-names';
import AppNavigation from './app-navigation';
import AuthNavigation from './auth-navigation';
const {navigatorNames} = RouteNames;
const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigatorNames.appNavigator}
        screenOptions={options}>
        <Stack.Screen
          name={navigatorNames.appNavigator}
          component={AppNavigation}
        />
        <Stack.Screen
          name={navigatorNames.authNavigator}
          component={AuthNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
