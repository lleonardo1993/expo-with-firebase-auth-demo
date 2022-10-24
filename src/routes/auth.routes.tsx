import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignInScreen } from '../../screens/SignInScreens';
import { Register } from '../../src/screens/Register';

import { SignUpScreen } from '../../screens/SignUpScreens';
/** testa react navigation para rotas*/
import {} from '@react-navigation/native'


const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignInScreen" component={SignInScreen} />
      <Screen name="SignInScreen" component={SignInScreen} />
      <Screen name="register" component={Register} />
    </Navigator>
  );
}