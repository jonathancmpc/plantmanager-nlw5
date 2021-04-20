import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView `
  padding: ${Platform.OS === 'ios' ? 0 : 25}px 20px;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View `
  flex: 1;
  align-items: center;
  justify-content: center;
  width: ${Dimensions.get('window').width * 0.80}px;
`;

export const Emoji = styled.Text `
  font-size: 65px;
`;

export const Title = styled.Text `
  margin-top: 35px;
  text-align: center;
  font-size: 25px;
  padding: 20px 0;
  color: ${colors.heading};
`;

export const SubTitle = styled.Text `
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
  line-height: 28px;
`;

export const ContainerButton = styled.View `
  margin-top: 40px;
  width: ${Dimensions.get('window').width * 0.60}px;
`;
