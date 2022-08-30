import React from 'react';
import Trash from '../../assets/trash.png';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container, ContainerCheck, TextTask, Del, ImageTrash
} from './styles';

export type TaskProps = {
    id: number;
    name: string;
    done: boolean;
}

export function TaskList({id, name, done}: TaskProps) {
  return (
    <Container>
        <ContainerCheck>
            <Icon  name='check' size={12} />
        </ContainerCheck>

        <TextTask> {name} </TextTask>

        <Del>
            <ImageTrash source={Trash} />
        </Del>
    </Container>
  );
}