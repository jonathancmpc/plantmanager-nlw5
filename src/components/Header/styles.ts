import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-top: ${getStatusBarHeight()}px; /* Solução para começar o app após a barra de navegação superior - Funciona no Android e IOS */
`;

export const Content = styled.View`
  flex-direction: column;
`;

export const Greeting = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
`;

export const UserName = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  line-height: 40px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;
