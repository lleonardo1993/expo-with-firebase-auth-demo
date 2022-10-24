import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: '#F3F2F8';
  padding: 24px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48
  },
})`
  width: 100%;
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  font-family: 'Inter_400Regular';
  color: '#8D919E';
  text-align: center;
  margin: 12px 0 24px;
`;