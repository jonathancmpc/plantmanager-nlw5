import React from 'react';

import { ButtonContainer, ButtonText, Icon } from './styles';

interface ButtonNextProps {
  text?: string;
  nameIcon?: string;
  onPress: () => void;
}

export function ButtonNext({ text, nameIcon, onPress, ...rest }: ButtonNextProps) {
  return (
    <ButtonContainer text={!!text} activeOpacity={0.7} onPress={onPress} {...rest}>
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
