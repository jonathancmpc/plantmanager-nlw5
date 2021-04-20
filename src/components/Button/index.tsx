import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { fonts } from '../../styles/fonts';
import { Container, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
}

export const Button = ({ title, onPress }: ButtonProps) => {
  return(
    <Container onPress={onPress}>
      <Text style={fonts.Jost_400Regular}>
        { title }
      </Text>
    </Container>
  );
}