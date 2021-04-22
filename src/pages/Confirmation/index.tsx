import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';

import { Button } from '../../components/Button';

import { fonts } from '../../styles/fonts';
import { Container, ContainerButton, Content, Emoji, Title, SubTitle } from './styles';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄'
}

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    icon,
    buttonTitle,
    nextScreen
  } = routes.params as Params;

  function handleToStart() {
    navigation.navigate(nextScreen);
  }

  return (
    <Container>
      <Content>
        <Emoji>
          {emojis[icon]}
        </Emoji>

        <Title style={fonts.Jost_600SemiBold}>
          {title}
        </Title>

        <SubTitle style={fonts.Jost_400Regular}>
          {subtitle}
        </SubTitle>
      
        <ContainerButton>
          <Button onPress={handleToStart} title={buttonTitle} />
        </ContainerButton>
      </Content>

    </Container>
  );
}