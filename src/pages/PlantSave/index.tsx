import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { SvgFromUri } from 'react-native-svg';
import watedropImg from '../../assets/waterdrop.png';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';
import { PlantProps, savePlant } from '../../libs/storage';

import { Button } from '../../components/Button';

import { fonts } from '../../styles/fonts';
import {
  Container,
  PlantInfo,
  SubTitle, 
  Title, 
  Controller,
  TipContainer,
  TipImage,
  TipText,
  AlertLable,
  DateTimePickerText,
  ButtonDateTimePicker
} from './styles';

interface Params {
  plant: PlantProps;
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios'); // Retorna verdadeiro por padrão caso seja IOS, pois o datepicker padrão do IOS não precisa apertar um botão.

  const navigation = useNavigation();
  const route = useRoute();
  const { plant } = route.params as Params;

  function handleChangeTime(_: Event, dateTime: Date | undefined) {
    if(Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    //Verificando se a data passada pelo usuário é antiga a data de hoje
    if(dateTime && isBefore(dateTime, new Date())){
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro! ⏰');
    }

    if(dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker(oldState => !oldState);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      });

      navigation.navigate('Confirmation', {
        title: 'tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants'
      });
    } catch {
      return Alert.alert('Não foi possível salvar :(');
    }
  }

  return (
    <Container>
      <PlantInfo>
        <SvgFromUri 
          uri={plant.photo}
          height={150}
          width={150}
        />

        <Title style={fonts.Jost_600SemiBold}>{plant.name}</Title>

        <SubTitle style={fonts.Jost_400Regular}>{plant.about}</SubTitle>

      </PlantInfo>

      <Controller>
        <TipContainer>
          <TipImage source={watedropImg}/>

          <TipText style={fonts.Jost_400Regular}>
            {plant.water_tips}
          </TipText>
        </TipContainer>

        <AlertLable style={fonts.Jost_400Regular}>
          Escolha o melhor horário para ser lembrado:
        </AlertLable>

        {showDatePicker && (
          <DateTimePicker 
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        {
          Platform.OS === 'android' && (
            <ButtonDateTimePicker onPress={handleOpenDateTimePickerForAndroid}>
              <DateTimePickerText style={fonts.Jost_400Regular}>
                {`Mudar Horário - ${format(selectedDateTime, 'HH:mm')}h`}
              </DateTimePickerText>
            </ButtonDateTimePicker>
          )
        }

        <Button 
          title="Cadastrar planta"
          onPress={handleSave}
        />
        
      </Controller>
    </Container>
  );
};

