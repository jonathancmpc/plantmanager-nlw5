import React from 'react';
import wateringImg from '../../assets/watering.png'

import { ButtonNext } from '../../components/ButtonNext';

import { fonts } from '../../styles/fonts';
import { 
  Container, 
  Title, 
  SubTitle, 
  ImageStyled 
} from './styles';

export function Welcome() {
  return (
    <Container>
      <Title style={fonts.Jost_600SemiBold}>
        Gerencie {'\n'} 
        suas plantas de{'\n'} 
        forma fácil
      </Title>

      <ImageStyled 
        source={wateringImg} 
        resizeMode="contain"
      />

      <SubTitle style={fonts.Jost_400Regular}>
        Não esqueça mais de regar suas{'\n'} 
        plantas. Nós cuidamos de lembrar você {'\n'} 
        sempre que precisar.
      </SubTitle>

      <ButtonNext nameIcon="chevron-right" />
      
    </Container>
  )
}