import React from 'react';

import { ButtonContainer, ButtonText, Icon } from './styles';

interface ButtonProps {
  text?: string;
  nameIcon?: string;
}

export function Button({ text, nameIcon }: ButtonProps) {
  return (
    <ButtonContainer text={!!text} activeOpacity={0.7}>
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
