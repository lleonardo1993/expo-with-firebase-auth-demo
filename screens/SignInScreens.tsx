import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Lottie } from '../src/components/Animations/Lottie';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

import { FooterButton } from '../src/components/Controllers/FooterButton';
import { Button } from '../src/components/Controllers/Button';
import { Input } from '../src/components/Controllers/Input';
import { Form, Title, Footer } from './styles';

import signInAnimation from '../assets/animations/signin.json';
import { KeyboardAvoidingView, Platform } from 'react-native';
const auth = getAuth();

export const SignInScreen = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  async function signIn() {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(value => {
        console.log('Fez login com sucesso! \n' + value.user.uid);
      })
  }

  return (
    <Form>
      <View style={styles.container}>
        <Lottie source={signInAnimation} />
      </View>
      <Title>Entrar</Title>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Entrar" onPress={signIn} isLoading={isLoading} />

      <Footer>
        <FooterButton title="Criar conta" icon="person-add" onPress={() => navigation.navigate('Sign UpO')} />
        <FooterButton title="Esqueci senha" icon="email" onPress={signIn} />
      </Footer>
    </Form>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,

    alignItems: 'center',
    justifyContent: 'center',
  },

  controls: {
    flex: 1,
    backgroundColor: '#3f5996',
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
  inputtext: {


    marginBottom: 20,
    fontSize: 23,
    fontWeight: "bold",
    width: 200
  },

});
export default SignInScreen;