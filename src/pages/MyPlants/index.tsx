import React, { useEffect, useState } from 'react';
import { loadPlant, PlantProps } from '../../libs/storage';
import { formatDistance } from 'date-fns/esm';
import { pt } from 'date-fns/locale';
import waterdropImage from '../../assets/waterdrop.png';

import { Header } from '../../components/Header';

import { 
  Container, 
  Spotlight, 
  SpotlightImage,
  Plants,
  PlantsTitle,
  SpotlightText
} from './styles';
import { fonts } from '../../styles/fonts';
import { FlatList } from 'react-native-gesture-handler';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';

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
            <PlantCardSecondary data={item} />
          )}
        />
      </Plants>
    </Container>
  );
};

