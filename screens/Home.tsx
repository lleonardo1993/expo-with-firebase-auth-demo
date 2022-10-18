import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import auth from  'firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';

export default function HomeScreen() {
  const { user } = useAuthentication();

 
  async function signOut(auth){
    await signOut (auth)
    .then(()=>{console.log('Usuário deslogado com sucesso!')
    this.props.navigation.navigate('SignIpScreen');
    
          })
  .catch(error => console.log(error));
  };
  
 
  return (
    <View style={styles.container}>
      <Text>Welcome {user?.email}!</Text>

      
      <Button title="Sign Out" style={styles.button} onPress={() => signOut(auth)} />
      
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
    marginTop: 10
  }
});

