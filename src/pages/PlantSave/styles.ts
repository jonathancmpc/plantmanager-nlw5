import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  margin-top: ${getStatusBarHeight() || 25}px;
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.shape};
`;

export const PlantInfo = styled.View`
  flex:1;
  padding: 50px 30px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.shape};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.heading};
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  color: ${colors.heading};
  text-align: center;
  font-size: 17px;
  margin-top: 10px;
`;

export const Controller = styled.View`
  background-color: ${colors.white};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: ${getBottomSpace() || 20}px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  text-align: center;
  margin-left: 20px;
  color: ${colors.blue};
  font-size: 17px;
`;

export const AlertLable = styled.Text`
  text-align: center;
  color: ${colors.heading};
  font-size: 12px;
  margin-bottom: 5px;
`;
