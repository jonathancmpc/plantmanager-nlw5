import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

interface ButtonProps extends RectButtonProps {
  active: boolean;
}

interface TextProps {
  active: boolean;
}

export const Button = styled(RectButton)<ButtonProps> `
  background-color: ${props => props.active ? colors.green_light : colors.shape};
  height: 40px;
  width: 76px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const Text = styled.Text<TextProps>`
  color: ${props => props.active ? colors.green_dark : colors.heading};
  font-size: 16px;
`;
