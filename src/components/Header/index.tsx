import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jonathanImg from '../../assets/jonathan.jpeg';

import { fonts } from '../../styles/fonts';
import { Content, Container, Greeting, UserName, Image } from './styles';

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    }

    loadStorageUserName();
  }, []);

  return (
    <Container>
      <Content>
        <Greeting style={fonts.Jost_400Regular}>Olá</Greeting>
        <UserName style={fonts.Jost_600SemiBold}>{userName}</UserName>

      </Content>
      <Image source={jonathanImg} />
    </Container>
  );
};

