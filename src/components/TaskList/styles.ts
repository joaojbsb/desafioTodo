import styled from 'styled-components/native';

export const Container = styled.View`
  width: 327px;
  height: 64px;
  flex-direction: row;
  border: 1px solid #333333;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.86);
  padding: 12px 8px;
  background-color: #333333;  
  align-items: center;
  margin-bottom: 8px;

`;

export const ContainerCheck = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    border: 1px solid #4EA8DE;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`;

export const TextTask = styled.Text`
    width: 235px;
    height: 40px;
    margin-right: 8px;
    margin-left: 8px;
    font-size: 14px;
    color: #F2f2f2;
    align-items: center;
    justify-content: center;
`;

export const Del = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
`;

export const ImageTrash = styled.Image`

`;