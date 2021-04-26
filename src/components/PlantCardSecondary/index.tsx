import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { RectButtonProperties, Swipeable } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { Button, ButtonRemove, Details, Time, TimeLabel, Title } from './styles';

interface PlantCardSecondary extends RectButtonProperties{
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

export function PlantCardSecondary({ data, handleRemove, ...rest}: PlantCardSecondary) {

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <ButtonRemove onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </ButtonRemove>
          </View>
        </Animated.View>
      )}
    >
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
    </Swipeable>
  );
};

