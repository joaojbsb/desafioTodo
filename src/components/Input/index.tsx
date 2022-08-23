import React, {useState} from 'react';
import { TextInputProps, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import {
  Container, InputText, AddButon
} from './styles';

type InputProps =  TextInputProps & {
  addTask: (task: string) => void
};


export function Input({ addTask, ...rest}: InputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if (!task) {
      return;
    }
    addTask(task);
    setTask('');
  };


  return (
    <Container>

      <InputText 
        placeholder='Adicionar uma Tarefa' 
        placeholderTextColor='#808080' 
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />

      <AddButon
        activeOpacity={0.7}
        onPress={handleAddNewTask}        
      >
        <AntDesign name="pluscircleo" size={16} color="white" />

      </AddButon>

    </Container>
  );
}