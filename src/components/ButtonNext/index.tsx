import React from 'react';
import { ButtonProps } from 'react-native';

import { ButtonContainer, ButtonText, Icon } from './styles';

interface ButtonNextProps {
  text?: string;
  nameIcon?: string;
}

export function ButtonNext({ text, nameIcon, ...rest }: ButtonNextProps) {
  return (
    <ButtonContainer text={!!text} activeOpacity={0.7} {...rest}>
      {text && (
        <ButtonText>{text}</ButtonText>
      )}
      {nameIcon && (
        <Icon 
          isVisible={!!nameIcon} 
          name={nameIcon} 
          size={20} 
          color="#fff" 
        />
      )}
    </ButtonContainer>
  )
}
