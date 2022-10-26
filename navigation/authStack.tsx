import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignInScreens';
import SignOutScreen from '../screens/SignUpScreens';
import SignUpScreen from '../screens/SignUpScreens';


import AccountForm from '../screens/AccountForm';

import MainTab from '../src/stacks/MainTab';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createMaterialBottomTabNavigator  } from "@react-navigation/material-bottom-tabs";

const TabMat = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AuthStack() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainTab" /* Funcão que define qual a primeira tela a ser exebida */
        screenOptions={{
          headerShown: false  /* Funcão que esconde o cabeçalho da tela */
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Tela Bem Vindo!' }}
        />

        <Stack.Screen
          options={{ title: 'Tela de Login' }}
          name="Sign In"
          component={SignInScreen} />
        <Stack.Screen
          options={{ title: 'Tela de Cadastro' }}
          name="Sign Up"
          component={SignOutScreen} />

        <Stack.Screen
          options={{ title: 'Tela de Cadastro teste' }}
          name="Sign UpO"
          component={AccountForm} />


        <Stack.Screen 
        options={{ title: 'Tela Main tab' }}
        name="MainTab"
        component={MainTab} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
