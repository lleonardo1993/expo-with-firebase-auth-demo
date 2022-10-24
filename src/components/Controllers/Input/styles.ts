import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';

export const Container = styled(TextInput).attrs<TextInputProps>(() => ({
  placeholderTextColor: '#8D919E'
})) <TextInputProps>`
  width: 100%;
  height: 56px;
  
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 12px;
  font-family: Inter_400Regular;
  border: 2px solid;
  border-color: #585fb4;
 
`;