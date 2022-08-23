import { TextInput, TouchableOpacity } from 'react-native';
import styled, {css} from 'styled-components/native';



export const Container = styled.View`
    flex-direction: row;
    margin-top: -27px;
    justify-content: center;

`;

export const InputText = styled(TextInput).attrs({

})`
    width: 271px;
    height: 54px;
    padding: 16px;
    border: 1px solid #5E60CE;
    border-radius: 6px;
    font-size: 14px;
    margin-left: 24px;
    margin-right: 4px;
    background-color: #262626;


    ${({ theme })=> css`
        font-family: ${theme.FONTS.TEXT};
        color: ${theme.COLORS.TITLE};
    `};
`;

export const AddButon = styled(TouchableOpacity)`
    width: 52px;
    height: 52px;
    justify-content: center;
    align-items: center;
    background-color: #1E6F9F;
    margin-right: 24px;
    padding: 18px;
    border-radius: 6px;
`;