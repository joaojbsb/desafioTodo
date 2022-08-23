import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #1A1A1A;
  align-items: center;
`;

export const ContainerTitle = styled.View`
  width: 327px;
  height: 19px;
  flex-direction: row;
  margin-top: 32px;
  justify-content: space-between;
`;

export const ContainerCreated = styled.View`
  flex-direction: row;

`;

export const ContainerFinished = styled.View`
  flex-direction: row;
`;

export const TitleCreated = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: #4ea8de;
  margin-right: 16px;
`;

export const NumberCreated = styled.Text`
  background-color: #333333;
  border-radius: 999px;
  color: #D9D9D9;
  font-size: 12px;
`;

export const TitleFinished = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: #8284fa;
  margin-right: 16px;
`;

export const NumberFinished = styled.Text`
  background-color: #333333;
  border-radius: 999px;
  color: #D9D9D9;
  font-size: 12px;
`;


