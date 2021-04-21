import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { fonts } from '../../styles/fonts';

import { Button, Text } from './styles';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnviromentButton({ title, active = false, ...rest }: EnviromentButtonProps) {
  return (
    <Button active={active} { ...rest }>
      <Text active={active} style={active ? fonts.Jost_600SemiBold : fonts.Jost_400Regular}>
        { title }
      </Text>
    </Button>
  );
};

