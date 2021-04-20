import React from 'react';
import { fonts } from '../../styles/fonts';
import { Container, Text } from './styles';

export function Button() {
  return(
    <Container>
      <Text style={fonts.Jost_400Regular}>
        Confirmar
      </Text>
    </Container>
  );
}