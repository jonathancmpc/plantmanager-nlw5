import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
`;

export const HeaderContent = styled.View`
  padding: 0 30px;
`;

export const FirstText = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const LastText = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  line-height: 20px;
`;

export const FlatListEnviroment = styled(FlatList)`
  height: 40px;
  margin: 32px 0 0 32px;
`;

export const ContainerListCardPLants = styled.View`
  flex: 1;
  padding: 0 20px;
  margin-top: 30px;
`;

export const FlatListCardPlants = styled(FlatList)`
  
`;