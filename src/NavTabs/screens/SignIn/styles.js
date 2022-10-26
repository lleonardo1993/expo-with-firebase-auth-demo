import React from "react";
import styled from "styled-components/native";



/* Função Conteiner style */
export const Container = styled.SafeAreaView`
background-color: #191D26;
flex: 1;
`;

/* Função LoadingIcon usado no Loading inicial do App */
export const LoadingIcon = styled.ActivityIndicator`
`;

/*

export const InputArea = styled.View`

widht: 100%;
heigth: 100%
padding: 40px;
background-color: #FFF;

`;

*/

export const CustomButton = styled.TouchableOpacity`
heigth: 100%;
widht: 100%;
background-color: #7000FF;
border-radius: 30px;
justify-content: center;
align-items: center;


`;

export const CustomButtonText = styled.Text`
font-size: 18px;
color: #FFF;
`;
export const SignMessageButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 50px;
margin-bottom: 20px;


`;
export const SignMessageButtonText = styled.Text`
font-size: 16px;
color: #FFF;

`;
export const SignMessageButtonBold = styled.Text`
font-size: 16px;
color: #FFF;
font-weight: bold;
margin-left: 5px;
`;


/*
Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonBold

*/