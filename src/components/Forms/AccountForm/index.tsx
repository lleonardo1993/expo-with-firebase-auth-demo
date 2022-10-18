import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Button } from '@components/Controllers/Button';
import { Input } from '@components/Controllers/Input';
import { Form, Title } from './styles';


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';



import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export function AccountForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);




  const navigation = useNavigation();

  /** 
   *   const auth = getAuth(app);
   * import { firebaseConfig } from '../../../../firebase-config'
   * Funcçã que cria uma nova conta usuario FireBase   const app = initializeApp(firebaseConfig);*/
  function handleNewAccount() {

    setIsLoading(true);

    auth()
  .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });


  }

  return (
    <Form>
      <Title>Cadastrar</Title>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Cadastrar" isLoading={isLoading} onPress={handleNewAccount} />
    </Form>
  );
}