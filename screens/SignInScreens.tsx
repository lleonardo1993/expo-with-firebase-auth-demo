import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { useNavigation } from '@react-navigation/native';

const auth = getAuth();

export const SignInScreen = () => {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  const navigation = useNavigation();
  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email e Senha Obrigatorio.'
        
      })
      navigation.navigate('home')
      console.log(value.email)
      console.log(value.password)
      console.log(value)
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        
      })
    }
  }

  return (
    <View style={styles.container}>
      <Text>Entrar!</Text>

      {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}

      <View style={styles.controls}>
        <Input
          placeholder='Email'
          containerStyle={styles.inputtext}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          leftIcon={<Icon
            name='envelope'
            size={16} />} autoCompleteType={undefined}        />

        <Input
          placeholder='Password'
          containerStyle={styles.inputtext}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
          leftIcon={<Icon
            name='key'
            size={16} />} autoCompleteType={undefined}        />

        <Button title="Sign in" buttonStyle={styles.control} onPress={signIn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  controls: {
    flex: 1,
    
  },

  control: {
    marginTop: 50,
    width: '100%',
    height: 56
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  },
  inputtext:{
    
    
    marginBottom: 20,
    fontSize: 23,
    fontWeight: "bold",
    width: 200
  }
});
export default SignInScreen;