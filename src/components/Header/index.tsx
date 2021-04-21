import React from 'react';
import jonathanImg from '../../assets/jonathan.jpeg';
import { fonts } from '../../styles/fonts';

import { Content, Container, Greeting, UserName, Image } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Greeting style={fonts.Jost_400Regular}>Olá</Greeting>
        <UserName style={fonts.Jost_600SemiBold}>Jonathan</UserName>

      </Content>
      <Image source={jonathanImg} />
    </Container>
  );
};

