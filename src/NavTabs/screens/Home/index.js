import React, { useState, useEffect } from "react";
import { Image, Platform, PermissionsAndroid, Button, View, StyleSheet, Text } from "react-native";
import * as Location from 'expo-location';

import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTile,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder,

    LoadingIncon,
    ListArea

} from './styles';

import SearchIcon from '../../../svg/pngwing.com.svg';
import { StatusBar } from "react-native";
import BarberItem from '../../../components/BarberItem'

import Api from '../../../Api';

export default () => {
    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const callLocation = () => {

        useEffect(() => {
            (async () => {

                let { status } = await Location.requestForegroundPermissionsAsync(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Permissão de Acesso à Localização",
                        message: "Este aplicativo precisa acessar sua localização.",
                        buttonNeutral: "Pergunte-me depois",
                        buttonNegative: "Cancelar",
                        buttonPositive: "OK"
                    }
                );
                console.log(status)
                if (status === PermissionsAndroid.RESULTS.GRANTED) {
                    alert('Acesso a Localização Autorizado!');
                } else {
                    alert('Permissão de Localização Negada.');
                }

                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
                console.log(location)
                
            })();

        }, []);

        let text = 'Aguarde..';
        if (errorMsg) {
            text = errorMsg;
        } else if (location) {
            text = JSON.stringify(location);
        }

    }






    /*
    const getBarbers = async () => {
        setLoading(true);
        setList([]);

        let res = await Api.getBarbers();
        if (res.error == '') {
            if (res.loc) {
                setLocationText(res.loc);
                console.log("resloc" + res.loc);
            }
            setList(res.data);

        } else {
            alert('Error: ' + res.error);
        }
        setLoading(false);

    }

  
  
    /** 
        const getLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const currentLatitude = JSON.stringify(position.coords.latitude);
                    const currentLongitude = JSON.stringify(position.coords.longitude);
                    setCurrentLatitude(currentLatitude);
                    setCurrentLongitude(currentLongitude);
                },
                (error) => alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
            const watchID = navigator.geolocation.watchPosition((position) => {
                const currentLatitude = JSON.stringify(position.coords.latitude);
                const currentLongitude = JSON.stringify(position.coords.longitude);
                setCurrentLatitude(currentLatitude);
                setCurrentLongitude(currentLongitude);
            });
            setWatchID(watchID);
        }
    
        const clearLocation = () => {
            navigator.geolocation.clearWatch(watchID);
        }
        */

    return (
        <Container>

            <StatusBar backgroundColor="#9370DB" barStyle="light-content" />
            <Scroller>
                <HeaderArea>
                    <HeaderTile numberOfLiner={2} >Encontre o seu Barbeiro Favorito</HeaderTile>
                    <SearchButton onPress={() => navigation.navigate('Search')} >
                        <SearchIcon width="36" height="36" fill="#FFFFFF" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea >
                    <LocationInput
                        style={{ fontWeight: '500', fontSize: 24 }}
                        placeholder="Onde você está?"
                        placeholderTextColor="#000000"

                    />


                    <LocationFinder

                    >
                        <Image
                            style={{ alignItems: "center", height: 50, marginRight: 22 }}
                            source={require('../../../svg/maps.png')}
                        />
                    </LocationFinder>

                </LocationArea>


            </Scroller>
        </Container>

    );

}
const stylesa = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        padding: 16,
        backgroundColor: 'white',
    },
    boldText: {
        fontSize: 30,
        color: 'red',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    }
});