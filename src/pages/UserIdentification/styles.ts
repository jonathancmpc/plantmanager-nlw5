import styled, { css } from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';
import colors from '../../styles/colors';

interface TextInputProps {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean;
}

export const Container = styled.SafeAreaView `
  padding: ${Platform.OS === 'android' ? 25 : 0}px 20px;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  width: ${Dimensions.get('window').width}px;
`;

export const Content = styled.View `
  flex: 1;
  width: ${Dimensions.get('window').width}px;
`;

export const Form = styled.View `
  flex: 1;
  justify-content: center;
  padding: 0 54px;
  align-items: center;
`;

export const Title = styled.Text `
  font-size: 26px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 25px;
`;

export const Emoji = styled.Text `
  font-size: 44px;
`;

export const Input = styled.TextInput<TextInputProps> `
  border-bottom-width: 1px;
  border-color: ${colors.gray};
  color: ${colors.heading};
  width: ${Dimensions.get('window').width * 0.7}px;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  opacity: 0.8;

  border-color: ${props => 
    props.isFocused || props.isFilled 
      ? colors.green 
      : colors.gray
  };

  ${props => props.isError && 
    css`border-color: ${colors.red};`    
  }
`;

export const ContainerButton = styled.View `
  margin-top: 40px;
  width: ${Dimensions.get('window').width * 0.65}px;
`