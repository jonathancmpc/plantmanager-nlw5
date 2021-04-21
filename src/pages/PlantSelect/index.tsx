import React from 'react';
import { View, FlatList } from 'react-native';
import { EnviromentButton } from '../../components/EnviromentButton';

import { Header } from '../../components/Header';
import { fonts } from '../../styles/fonts';

import { Container, FirstText, LastText, HeaderContent, FlatListEnviroment } from './styles';


export function PlantSelect() {
  return (
    <Container>
      <HeaderContent>
        <Header />

        <FirstText style={fonts.Jost_600SemiBold}>
          Em qual ambiente
        </FirstText>
        <LastText style={fonts.Jost_400Regular}>
          você quer colocar sua planta?
        </LastText>
      </HeaderContent>

      <View>
        <FlatListEnviroment 
          data={[1,2,3,4,5,6,7]}
          renderItem={({ item }) => (
            <EnviromentButton 
              key={item}
              title="Cozinha"
              active
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

    </Container>
  );
};