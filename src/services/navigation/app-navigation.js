import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoutes} from '../../screens';
import RouteNames from '../constants/route-names';
const {appRoutes} = RouteNames;
const Stack = createNativeStackNavigator();
const options = {
  headerShown: false,
};
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name={appRoutes.welcomeScreen}
        component={AppRoutes.WelcomeScreen}
      />
      <Stack.Screen
        name={appRoutes.launchScreen}
        component={AppRoutes.LaunchScreen}
      />
      <Stack.Screen
        name={appRoutes.homeScreen}
        component={AppRoutes.HomeScreen}
      />
      <Stack.Screen
        name={appRoutes.dashboardScreen}
        component={AppRoutes.DashboardScreen}
      />
    </Stack.Navigator>
  );
};
export default AppNavigation;
