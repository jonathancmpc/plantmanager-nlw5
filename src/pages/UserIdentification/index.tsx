import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  TouchableWithoutFeedback, 
  Keyboard, 
  KeyboardAvoidingView, 
  Platform, 
  Alert
} from 'react-native';

import { Button } from '../../components/Button';

import { fonts } from '../../styles/fonts';
import { 
  Container, 
  Content, 
  Emoji, 
  Form, 
  Input, 
  Title, 
  ContainerButton 
} from './styles';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  //Verifica se o usuário saiu do input
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsError(false);
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit() {
    if ( !name ) {
      setIsError(true);
    }
    try{
      await AsyncStorage.setItem('@plantmanager:user', name!);
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect'
      });
    } catch {
      Alert.alert('Ops! Não foi possível salvar o seu nome :(');
    }
  }

  return(
    <Container>
      {/* O KeyboardAvoidingView serve para o teclado não ficar em cima do conteúdo, principalmente no IOS */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Esse carinha é responsável para quando clicarmos em qualquer área fora do teclado ele suma(o teclado) */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Emoji>
                { isFilled ? '😄' : '🙂' }
              </Emoji>

              <Title style={fonts.Jost_600SemiBold}>
                Como podemos{'\n'} 
                chamar você?
              </Title>
              <Input 
                placeholder= "Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                isFocused={isFocused}
                isFilled={isFilled}
                isError={isError}
              />
              
              <ContainerButton>
                <Button title="Confirmar" onPress={handleSubmit} />
              </ContainerButton>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  )
}