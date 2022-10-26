import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import Svg from "react-native-svg";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CommonActions } from "@react-navigation/native";
import { UserContext } from "../../contexts/UserContexts"

import { StatusBar } from "react-native";


import {
    Container,
    InputArea,

    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonBold
} from './styles';

import * as Animatable from "react-native-animatable";
import Input from "../../components/SignInput";
import Account from "../Preload/account.svg";
import EmailIcon from '../../../assets/svg/email.svg';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Api from '../../Api';

/* imagem de fundo backgroud */
const mail = MaterialCommunityIcons;


/* usuario generico api: suporte@b7web.com.br
                          1234 */


export default () => {  
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();


    /* validação do token no login*/
    const handleSignClick = async () => {
        if(emailField != '' && passwordField != ''){
            
            let json = await Api.signIn(emailField, passwordField);

            if(json.token){
                await AsyncStorage.setItem('token', json.token);
               
                alert('deu certo')
                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });

                 /* redirecionando para a main tab*/
                navigation.reset({
                    routes: [{name: 'MainTab'}]
                });

            }else{
                alert('E-mail e/ou senha incorretos!')
            }


        }else{
            alert("Preencha os campos!")
        }

    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignUp' }]
        })


    }


    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    return (
        <Container>
            <StatusBar backgroundColor="#A670EC" barStyle="light-content" />
            <View style={styleLogo.containerLogo}>

                <Animatable.Image
                    animation="flipInY"
                    source={require('../../../assets/img_fundo/barb240.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View style={styles.containerForm}
                animation="fadeInUp" delay={700}>

                <View style={{alignItems:'center'}}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: '5%' }}>Bem Vindo!</Text>

                
                    <LottieView
                        source={require('../../../assets/animation/loopLogin.json')}
                        autoPlay={true}
                        loop={true}
                        style={{ height: 200, alignItems: 'center', justifyContent: 'center', marginTop: -23 }}

                    />
                </View>

                <Animatable.View style={styleLoginEmail.containerLoginEmail}
                    animation="fadeInUp" delay={700}>

                    <Text style={styleInput.title}>Email
                    </Text>
                    <TextInput
                        placeholder="Digite o seu e-mail"
                        style={styleInput.input}
                        value={emailField}
                        onChangeText={t => setEmailField(t)}

                    />

                    <Text style={styleInput.title}>Senha
                    </Text>
                    <TextInput
                        placeholder="Digite a sua senha"
                        style={styleInput.input}
                        value={passwordField}
                        onChangeText={t => setPasswordField(t)}
                        secureTextEntry={true}
                    />

                </Animatable.View>

                <CustomButton style={stylebtnacessar.btnacessar} onPress={handleSignClick}>
                    <CustomButtonText>ACESSAR</CustomButtonText>
                </CustomButton>

                <TouchableOpacity style={styles.buttonRegister} onPress={handleMessageButtonClick}>
                    <Text style={styles.registerText}>Ainda não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>





        </Container>
    );
}


const styleLogo = StyleSheet.create({
    containerLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2
    }
})


const stylebtnacessar = StyleSheet.create({
    btnacessar: {
        height: 60,
        width: '80%',
        marginLeft: 50,
        borderRadius: 30,
        backgroundColor: '#7000FF',
        marginBottom: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    btntxt: {
        fontSize: '10%',
    }
})

const styles = StyleSheet.create({

    containerForm: {
        flex: 4,
        backgroundColor: '#B2A7A7',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 12,
    },
    text: {
        fontSize: 25,
        fontWeight: '100',
    },
    buttonRegister: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    registerText: {
        marginBottom: '5%',
        fontSize: 20,
        fontWeight: '100',
    },
    titleSaudacao: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: '400',
        marginLeft: '30%'
    },
    textSaudacao: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: '200',
        marginLeft: '17%'
    }


})

const styleInput = StyleSheet.create({
    containerLogin: {


    },
    title: {
        fontSize: 25,

    },
    input: {
        borderBottomWidth: 2,
        height: 30,
        marginBottom: 12,
        fontSize: 23,
        fontWeight: "500",



    }
})
const styleLoginEmail = StyleSheet.create({
    containerLoginEmail: {
        marginBottom: '5%',
        marginTop: -50


    },
    text: {

    }
})


