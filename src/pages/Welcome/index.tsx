import React from 'react';
import wateringImg from '../../assets/watering.png'

import { Button } from '../../components/Button';

import { Container, Title, SubTitle, ImageStyled } from './styles';

export function Welcome() {
  return (
    <Container>
      <Title>
        Gerencie {'\n'} 
        suas plantas de forma {'\n'} 
        fácil
      </Title>

      <ImageStyled source={wateringImg} />

      <SubTitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </SubTitle>

      <Button nameIcon="chevron-right" />
      
    </Container>
  )
}