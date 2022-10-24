import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/theme/';
import './config/firebase';
import RootNavigation from './navigation';

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { useTheme } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const themee = useTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider >
          <StatusBar style="dark" translucent backgroundColor="transparent" />
        <RootNavigation />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}