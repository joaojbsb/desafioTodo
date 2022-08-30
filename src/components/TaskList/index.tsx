import React, {useState} from 'react';
import Trash from '../../assets/trash.png';
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet } from 'react-native';

import {
  Container, ContainerCheck, TextTask, Del, ImageTrash
} from './styles';

export type TaskProps = {
    id: number;
    name: string;
    done: boolean;
    toggleTaskDone: (id: number) => void;
    removeTask: (id:number) => void;
}


export function TaskList({id, name, done, toggleTaskDone, removeTask}: TaskProps) {

  return (
    <Container>
        <ContainerCheck onPress={() => toggleTaskDone(id)} style={done === true &&  {backgroundColor: '#1DB863' }} >
          { done === true &&
            <Icon  name='check' size={12} color='white' />            
          }
        </ContainerCheck>

        <TextTask style={done === true &&  styles }> {name} </TextTask>

        <Del onPress={()=>removeTask(id)}>
            <ImageTrash source={Trash} />
        </Del>
    </Container>
  );
}

const styles = { 
    opacity: 0.4,
    textDecorationLine: 'line-through',
  }