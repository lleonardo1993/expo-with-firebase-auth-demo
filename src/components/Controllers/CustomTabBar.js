import React, { useContext } from "react";
import styled from "styled-components/native";

import { UserContext } from '../../contexts/UserContexts';

import { Image } from "react-native";

import HomeIcon from '../../svg/home.svg';
import SearchIcon from '../../svg/search.svg';
import TodayIcon from '../../svg/today.svg';
import Calendar from '../../svg/calendarperso.svg'
import FavoritesIcon from '../../svg/favorite.svg';
import AccountIcon from '../../svg/account.svg';


/*
background-color: #D9D9D9; cinza
background-color: #7000FF; roxo
../../../assets/img_fundo/barb340.png
*/
const TabArea = styled.View`
    height: 60px;    
    background-color: #7000FF;
    flex-direction: row;

`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`    
    justify-content: center;
    align-items: center;
    background-color: #7000FF;
    border-radius: 45px;
    border: 3px  #7000FF;
    margin-top: -25px;
`;

/* Verificar avatar quando checar o Token */
const AvatarIcon = styled.Image`
    width: 24;
    heigth: 24;
    border-radius: 12px;
`;


/* Função passar props state, navigation. Determina rota Navibar */
export default ({navigation}) => {


/* Função que pega o stado do usuário */
 

 const goTo = (screenName) => {
    navigation.navigate(screenName);
 }
/* Lógica que habilita visualizacão quando a estiver na tela ATIVA
    style={{opacity: state.index === 0? 1 : 0.5}} 
*/

    return (
        <TabArea >
            <TabItem onPress={()=> goTo('Home')}>
                <HomeIcon style={{ width:50, heigth:50, fill:"#FFFFFF"}} />
            </TabItem>
            <TabItem onPress={()=> goTo('Search')}>
                <SearchIcon style={{ width:50, heigth:50, fill:"#FFFFFF"}} />
            </TabItem>
            <TabItemCenter onPress={()=> goTo('Appointments')}>
                <Image
                    
                    style={{ width: 70, heigth: 70  }}
                    source={require('../../svg/calendar3.png')}
                />
            </TabItemCenter>
            <TabItem onPress={()=> goTo('Favorites')}>
                <FavoritesIcon style={{ width:50, heigth:50, fill:"#FFFFFF"}} />
            </TabItem>
            
        </TabArea>
    );
}