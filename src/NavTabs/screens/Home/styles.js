import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #0085FF;

`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTile = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weigth: bold;
    color: #FFF;

`;
/** VERIFICAR COMPONENTE */
export const TabAreaLupa = styled.View`
    height: 60px;    
    background-color: #7000FF;
    flex-direction: row;
`;


export const SearchButton = styled.TouchableOpacity`
    width: 46px;
    heigth: 46px;

`;

export const LocationArea = styled.View`
    background-color: #D9D9D9;
    display: flex;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-rigth: 20px;
    margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000000;
    


`;

export const LocationFinder = styled.TouchableOpacity`
`;

export const LoadingIncon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;
