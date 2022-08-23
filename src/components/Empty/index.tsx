import React from 'react';
import Clip from '../../assets/Clipboard.png';

import {
  Container, Image, Text
} from './styles';

export function Empty() {
  return (
    <Container>
        <Image source={Clip} />
        <Text>Você ainda não tem tarefas cadastradas
              Crie tarefas e organize seus itens a fazer
        </Text>
    </Container>
  );
}