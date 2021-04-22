import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
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
import { Load } from '../../components/Load';
import colors from '../../styles/colors';

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
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  const [enviromentSelected, setEnviromentSelected] = useState('all');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  async function fetchPlants() {
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
    
    if(!data) {
      return setLoading(true);
    }

    if(page > 1) {
      setPlants(oldValuePlants => [...oldValuePlants, ...data ]);       
      setFilteredPlants(oldValuePlants => [...oldValuePlants, ...data ]);     
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    
    setLoading(false);
    setLoadingMore(false);
  }

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
    fetchPlants();
  }, []);

  function handleEnviromentSelected(key: string) {
    setEnviromentSelected(key);

    if(key === 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter(plant => 
      plant.environments.includes(key)
    );

    setFilteredPlants(filtered);
  }

  function handleFetchMore(distance: number) {
    if(distance < 1) {
      return
    }

    setLoadingMore(true);
    setPage(oldValuePage => oldValuePage + 1);
    fetchPlants();
  }


  if(loading) {
    return <Load />
  }
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
              active={item.key === enviromentSelected}
              onPress={() => handleEnviromentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <ContainerListCardPLants>
        <FlatListCardPlants
          data={filteredPlants}
          renderItem={({ item }) => (
            <PlantCardPrimary 
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1} //Usuário chega a 10% da tela chama a função handleFetchMore.
          onEndReached={({ distanceFromEnd }) => 
            handleFetchMore(distanceFromEnd)
          }
          // Faz aparecer um loading(ActivityIndicator) quando rola a página enquanto carrega os novos itens na lista.
          ListFooterComponent={
            loadingMore 
            ? <ActivityIndicator color={colors.green} />
            : <></>
          }
        />
      </ContainerListCardPLants>

    </Container>
  );
};