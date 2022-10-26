import React, { useEffect, useContext } from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { Container } from './styles';
import LottieView from 'lottie-react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { UserContext } from "../../contexts/UserContexts"

import Api from '../../Api'

const imgbg = '../../../assets/img_fundo/fundoGroud.jpg'


export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);

    /* Verificação se tem o token, se não tiver encaminha para o sessão de login com 'HOOKS' */
    /*documentação expo assincrono key, https://react-native-async-storage.github.io/async-storage/docs/usage/ */
    const navigation = useNavigation();

    
    



    return (
        <ImageBackground source={require(imgbg)}
        
            style={fundoTela.fundo}>
            <Container>
                <View style={stilos.container}>
                    <Image
                        source={require('../../../assets/img_fundo/barb340.png')}
                    />
                    <LottieView source={require('../../../assets/animation/L2.json')}
                        autoPlay={true}
                        Loop={true}
                        size={10}
                        style={{ width: 300, height: 300, marginVertical:-40}}
                        reziseMode="cover"
                    />

                </View>               
                <StatusBar backgroundColor="#9370DB" barStyle="light-content"/>
            </Container>
        </ImageBackground>

    );
}
const stilos = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'

    }
})
const fundoTela = StyleSheet.create({
    fundo: {
        flex: 1,
        reziseMode: "cover",
        width: "100%"
    }
})
