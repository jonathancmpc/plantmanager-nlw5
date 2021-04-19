import styled from 'styled-components/native';
import { Platform } from 'react-native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView `
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Platform.OS === 'android' ? 25 : 0}px 0 0 0;
`;

export const Title = styled.Text `
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`;

export const SubTitle = styled.Text `
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading};
`;

export const ImageStyled = styled.Image `
  width: 292px;
  height: 284px;
`;