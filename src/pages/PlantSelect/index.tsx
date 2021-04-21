import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import api from '../../services/api';

import { Header } from '../../components/Header';
import { EnviromentButton } from '../../components/EnviromentButton';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';

import { fonts } from '../../styles/fonts';
import { 
  Container, 
  FirstText, 
  LastText, 
  HeaderContent, 
  FlatListEnviroment, 
  FlatListCardPlants,
  ContainerListCardPLants
} from './styles';

interface EnviromentProps {
  key: string;
  title: string;
}

interface PlantsProps {
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

export function PlantSelect() {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc');
      const enviromentsArray = [
        {
          key: 'all',
          title: 'Todos'
        },
        ...data,
      ]
      setEnviroments(enviromentsArray);
    }

    fetchEnviroment();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('plants?_sort=name&_order=asc');
      setPlants(data);
    }

    fetchPlants();
  }, []);


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
          data={enviroments}
          renderItem={({ item }) => (
            <EnviromentButton 
              key={item.id}
              title={item.title}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <ContainerListCardPLants>
        <FlatListCardPlants
          data={plants}
          renderItem={({ item }) => (
            <PlantCardPrimary 
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </ContainerListCardPLants>

    </Container>
  );
};