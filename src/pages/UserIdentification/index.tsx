import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Button } from '../../components/Button';

import { fonts } from '../../styles/fonts';
import { Container, Content, Emoji, Form, Input, Title, ContainerButton } from './styles';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  //Verifica se o usuário saiu do input
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return(
    <Container>
      {/* O KeyboardAvoidingView serve para o teclado não ficar em cima do conteúdo, principalmente no IOS */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
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
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
              isFocused={isFocused}
              isFilled={isFilled}
            />
            
            <ContainerButton>
              <Button />
            </ContainerButton>
          </Form>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}