import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView `
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: ${Platform.OS === 'android' ? 25 : 0}px 20px;
`;

export const Title = styled.Text `
  font-size: 28px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  line-height: 34px;
`;

export const SubTitle = styled.Text `
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading};
`;

export const ImageStyled = styled.Image `
  height: ${Dimensions.get('window').width * 0.7}px;
`;