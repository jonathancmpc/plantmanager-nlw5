import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Button = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background-color: ${colors.shape};
  border-radius: 20px;
  padding: 10px 0;
  align-items: center;
  margin: 10px;
`;

export const Text = styled.Text`
  color: ${colors.green_dark};
  margin: 16px 0;
`;
