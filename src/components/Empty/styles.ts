import styled from 'styled-components/native';

export const Container = styled.View`
    width: 327px;
    height: 208px;
    margin-top: 20px;
    padding: 48px 20px 48px 20px;
    align-items: center;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: 56px;
    height: 56px;
`; 

export const Text = styled.Text`
    font-size: 14px;
    color: #808080;
    line-height: 19px;
    text-align: center;
    margin-top: 16px;
`;