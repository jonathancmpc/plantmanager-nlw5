import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { fonts } from '../../styles/fonts';
import { Button, Text } from './styles';

interface PlantCardPrimary extends RectButtonProperties{
  data: {
    name: string;
    photo: string;
  }
}

export function PlantCardPrimary({ data, ...rest}: PlantCardPrimary) {
  return (
    <Button {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70}/>
      <Text style={fonts.Jost_600SemiBold}>
        { data.name }
      </Text>
    </Button>
  );
};

