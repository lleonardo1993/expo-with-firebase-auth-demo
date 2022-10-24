import React, { useState } from 'react';
import { Alert, View, StyleSheet } from 'react-native';

import { Button } from '../../src/components/Controllers/Button';
import { Input } from '../../src/components/Controllers/Input';
import { Form, Title } from './styles';
import { Lottie } from '../../src/components/Animations/Lottie';
import registerAnimation from '../../src/assets/animations/register.json';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

import { useNavigation } from '@react-navigation/native';

const auth = getAuth();

export function AccountForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  


  const navigation = useNavigation();

  /** 
   *   const auth = getAuth(app);
   * import { firebaseConfig } from '../../../../firebase-config'
   * Funcçã que cria uma nova conta usuario FireBase   const app = initializeApp(firebaseConfig);*/
  async function signUp() {
    setIsLoading(true);

    if (email === '' || password === '') { setError({
      ...Error,
      error: 'E-mail e senha são obrigatórios.' 
    })
    return;
      console.log('Email e senha são obrigatórios.')
    }

    try { 
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuário criado com Sucesso!!')
      navigation.navigate('Sign UpO')
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <Form>
      <View style={styles.container} >
        <Lottie source={registerAnimation} />
      </View>
      <Title>Cadastrar</Title>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Cadastrar" isLoading={isLoading} onPress={signUp} />
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


export default AccountForm;

function setError(arg0: { error: string; prototype: Error; captureStackTrace(targetObject: object, constructorOpt?: Function | undefined): void; prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined; stackTraceLimit: number; }) {
  throw new Error('Function not implemented.');
}
