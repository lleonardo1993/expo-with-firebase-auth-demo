import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import {getAuth, signOut} from 'firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';

import firebase from '../config/firebase'


import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const auth = getAuth();

  const navigation = useNavigation();

  const { user } = useAuthentication();

  

  async function logout() {
    await signOut(auth)
    .then(()=> {
      console.log('saiu com sucesso!');      
    })
    .catch(error => console.log(error))

  };


  return (
    <View style={styles.container}>
      <Text>Tela Inicial {user?.email}!</Text>
      <Button title="Sign Out" style={styles.button} onPress={() => logout()} />
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 40,
    width: 300,
    height: 300,
    
  }
});

