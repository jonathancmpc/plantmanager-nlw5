import { useRoute } from '@react-navigation/core';
import React from 'react';
import { SvgFromUri } from 'react-native-svg';
import watedropImg from '../../assets/waterdrop.png';
import { Button } from '../../components/Button';

import { fonts } from '../../styles/fonts';
import {
  Container,
  PlantInfo,
  SubTitle, 
  Title, 
  Controller,
  TipContainer,
  TipImage,
  TipText,
  AlertLable
} from './styles';

interface Params {
  plant: {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
      times: number;
      repeat_every: string;
    }
  }
}

export function PlantSave() {
  const route = useRoute();
  const { plant } = route.params as Params;

  return (
    <Container>
      <PlantInfo>
        <SvgFromUri 
          uri={plant.photo}
          height={150}
          width={150}
        />

        <Title style={fonts.Jost_600SemiBold}>{plant.name}</Title>

        <SubTitle style={fonts.Jost_400Regular}>{plant.about}</SubTitle>

      </PlantInfo>

      <Controller>
        <TipContainer>
          <TipImage source={watedropImg}/>

          <TipText style={fonts.Jost_400Regular}>
            {plant.water_tips}
          </TipText>
        </TipContainer>

        <AlertLable style={fonts.Jost_400Regular}>
          Escolha o melhor horário para ser lembrado:
        </AlertLable>

        <Button 
          title="Cadastrar planta"
          onPress={() => {}}
        />
        
      </Controller>
    </Container>
  );
};

