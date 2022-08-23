import styled from 'styled-components/native';

export const Container = styled.View`
  width: 375px;
  height: 173px;
  align-items: center;
  background-color: #0D0D0D;
`;

export const Brand = styled.Image.attrs({
    resizeMode: 'contain'
  })`
    width: 110px;
    height: 32px;
    margin-top: 70px;
    margin-bottom: 71px;
  `;
  