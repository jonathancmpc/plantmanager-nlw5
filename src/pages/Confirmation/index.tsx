import React from 'react';

import { Button } from '../../components/Button';

import { fonts } from '../../styles/fonts';
import { Container, ContainerButton, Content, Emoji, Title, SubTitle } from './styles';

export function Confirmation() {
  return (
    <Container>
      <Content>
        <Emoji>
          😄
        </Emoji>

        <Title style={fonts.Jost_600SemiBold}>
          Prontinho
        </Title>

        <SubTitle style={fonts.Jost_400Regular}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </SubTitle>
      
        <ContainerButton>
          <Button title="Começar" />
        </ContainerButton>
      </Content>

    </Container>
  );
}