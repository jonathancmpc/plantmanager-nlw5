import React, { useEffect, useState } from 'react';
import { loadPlant, PlantProps, StoragePlantProps } from '../../libs/storage';
import { formatDistance } from 'date-fns/esm';
import { pt } from 'date-fns/locale';
import { Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { Load } from '../../components/Load';
import { Header } from '../../components/Header';

import waterdropImage from '../../assets/waterdrop.png';
import { 
  Container, 
  Spotlight, 
  SpotlightImage,
  Plants,
  PlantsTitle,
  SpotlightText
} from './styles';
import { fonts } from '../../styles/fonts';


export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>();
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  useEffect(() => {
    async function loadStorageData() {
      //Carregando as plantas salvas
      const plantsStoraged = await loadPlant();

      //Fazendo a diferença da data de notificação da planta mais próxima da rega pela data atual para saber qual será o tempo em horas para regá-la.
      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      )
      
      setNextWatered(
        `Não esqueça de regar a(s) ${plantsStoraged[0].name} à ${nextTime}.`
      )

      setMyPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageData();
  }, []);

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não 🙏',
        style: 'cancel'
      },
      {
        text: 'Sim 😰',
        onPress: async () => {
          try {
            const data = await AsyncStorage.getItem('@plantmanager:plants');
            const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

            delete plants[plant.id];

            await AsyncStorage.setItem(
              '@plantmanager:plants',
              JSON.stringify(plants)
            );

            setMyPlants((oldData) => 
              oldData?.filter((item) => item.id !== plant.id)
            );

          } catch (error) {
            Alert.alert('Não foi possível remover! 😰')
          }
        }
      }
    ]);
  }


  if(loading) {
    return <Load />
  }
  return (
    <Container>
      <Header />

      <Spotlight>
        <SpotlightImage source={waterdropImage} />
        <SpotlightText style={fonts.Jost_400Regular}>{nextWatered}</SpotlightText>
      </Spotlight>

      <Plants>
        <PlantsTitle style={fonts.Jost_600SemiBold}>Pŕoximas Regadas</PlantsTitle>

        <FlatList 
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary 
              handleRemove={() => handleRemove(item)} 
              data={item} />
          )}
        />
      </Plants>
    </Container>
  );
};

