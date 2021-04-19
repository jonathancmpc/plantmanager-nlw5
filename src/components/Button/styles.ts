import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors';
import icon from 'react-native-vector-icons/Feather';

interface ButtonContainerProps {
  text: boolean;
}

interface IconProps {
  isVisible: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps> `
  background: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  flex-direction: row;
  padding: 0 10px;
  ${props => props.text ? css`
      width: auto;
    `
    : css`
      width: 56px;
    `
  };
`;

export const ButtonText = styled.Text `
  color: ${colors.white};
  font-size: 18px;
`;

export const Icon = styled(icon)<IconProps> `
  ${props => props.isVisible && css`
      padding: 0 0 0 5px;
    `
  };
  
`