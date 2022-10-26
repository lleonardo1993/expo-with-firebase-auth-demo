import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import Svg from "react-native-svg";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CommonActions } from "@react-navigation/native";


import { StatusBar } from "react-native";


import {
    Container,
    InputArea,

    
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
import { UserContext } from "../../contexts/UserContexts"



import Api from '../../Api';


/* imagem de fundo backgroud */






export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);

    const navigation = useNavigation();

    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != ''){
            let res = await Api.signUp(nameField, emailField, passwordField);
            console.log(res);

            if(res.token){
                await AsyncStorage.setItem('token', res.token);
               
                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: res.data.avatar
                    }
                });

                 /* redirecionando para a main tab*/
                navigation.reset({
                    routes: [{name: 'MainTab'}]
                });
            }else{
                alert("Error: " + res.error)
            }

        }else{
            alert("Preencha os campos")
        }

    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        })


    }


    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [nameField, setNameField] = useState('');

    return (
        <Container>
            <StatusBar backgroundColor="#A670EC" barStyle="light-content" />
            <View style={styleLogo.containerLogo}>

            <LottieView
                    source={require('../../../assets/animation/calendar.json')}
                    autoPlay={true}
                    loop={true}
                    style={{ alignItems: 'center', justifyContent: 'center',  }}

                />

            </View>
            
            <Animatable.View style={styles.containerForm}
                animation="fadeInUp" delay={700}>

                <LottieView
                    source={require('../../../assets/animation/button-cadastre-se.json')}
                    autoPlay={true}
                    loop={true}
                    style={{ alignItems: 'center', justifyContent: 'center', height: 70 }}

                />



                <Animatable.View style={styleLoginEmail.containerLoginEmail}
                    animation="fadeInUp" delay={700}>
                
                    <Text style={styleInput.title}>Nome
                    </Text>
                    <TextInput
                        placeholder="Digite o seu nome"
                        style={styleInput.input}
                        value={nameField}
                        onChangeText={t => setNameField(t)}

                    />
                    
                    
                    <Text style={styleInput.title}>Email
                    </Text>
                    <TextInput
                        Mail={EmailIcon}                        
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

                <TouchableOpacity style={stylebtnacessar.btnacessar} onPress={handleSignClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={handleMessageButtonClick}>
                    <Text style={styles.registerText}>Já possui uma conta? Faça o Login</Text>
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
        marginBottom: 3,
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
        fontWeight: "600"

    },
    input: {
        borderBottomWidth: 2,
        height: 30,
        marginBottom: 50,
        fontSize: 23,
        fontWeight: "500",



    }
})
const styleLoginEmail = StyleSheet.create({
    containerLoginEmail: {
        marginBottom: '2%',


    },
    text: {

    }
})


