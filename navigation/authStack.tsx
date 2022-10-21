import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignInScreens';
import SignOutScreen from '../screens/SignUpScreens';

const Stack = createStackNavigator();

export default function AuthStack() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
