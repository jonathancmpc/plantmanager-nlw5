import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { fonts } from '../../styles/fonts';
import { Button, Details, Time, TimeLabel, Title } from './styles';

interface PlantCardSecondary extends RectButtonProperties{
  data: {
    name: string;
    photo: string;
    hour: string;
  }
}

export function PlantCardSecondary({ data, ...rest}: PlantCardSecondary) {
  return (
    <Button {...rest}>
      <SvgFromUri uri={data.photo} width={50} height={50}/>
      <Title style={fonts.Jost_600SemiBold}>
        { data.name }
      </Title>

      <Details>
        <TimeLabel style={fonts.Jost_400Regular}>
          Regar às
        </TimeLabel>
        <Time style={fonts.Jost_600SemiBold}>
          {data.hour}
        </Time>
      </Details>
    </Button>
  );
};

