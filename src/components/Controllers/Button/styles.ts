import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: #6100FF;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #FFFFFF;
  font-family: Inter_400Regular;
`;

export const Load = styled.ActivityIndicator.attrs(() => ({
  color: '#FFFFFF'
}))``;