import React, {useEffect, useState} from 'react';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Empty } from '../../components/Empty';
import { TaskList, TaskProps } from '../../components/TaskList';
import { Alert, FlatList } from 'react-native';

import {
  Container, ContainerTitle, ContainerCreated, ContainerFinished, 
  TitleCreated, TitleFinished, NumberCreated, NumberFinished
} from './styles';

export function Home() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [qtDone, setQtDone] = useState({});

  function addNewTask(task:string){
    const newTask = {
      id: new Date().getTime(),
      name: task,
      done: false
    };
    setTasks(oldTasks => [...oldTasks, newTask]);
  };

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const updatedTasks = tasks.map(task => ({...task}));
    const foundItem = updatedTasks.find(item => item.id === id); 

    if (!foundItem) {
      return;
    };
    foundItem.done = !foundItem.done;
    setTasks(updatedTasks);
  };

  function hendleRemoveTask(id: number){
    Alert.alert('Remover item', 'Tem certeza que você deseja remover esse item?', [
      {
        style: 'cancel',
        text: 'Não'
      },
      {
        style: 'destructive',
        text: 'Sim',
        onPress: () => {
          const updatedTasks = tasks.filter(task=> task.id !== id);
          setTasks(updatedTasks);
        }
      }
    ]);
  };

useEffect(() => {
    const done = tasks.filter(tasks => tasks.done === true);
    setQtDone(done.length);
}, [tasks]);


  return (
    <Container>
      <Header />
      <Input
        addTask={addNewTask}
      />

      <ContainerTitle>

        <ContainerCreated>
          <TitleCreated>
            Criadas
          </TitleCreated>
          <NumberCreated>
              {tasks.length}
          </NumberCreated>
        </ContainerCreated>

        <ContainerFinished>
          <TitleFinished>
            Concluídas
          </TitleFinished>
          <NumberFinished>
            {qtDone}
          </NumberFinished>
        </ContainerFinished>

      </ContainerTitle>

      {
        tasks.length < 1 ?
        <Empty />
        :
        <FlatList 
        data={tasks}
        keyExtractor={item=> (String(item.id))}
        renderItem={({ item })=>(
          <TaskList 
            id={item.id}
            name={item.name}
            done={item.done}
            toggleTaskDone={handleToggleTaskDone}
            removeTask={hendleRemoveTask}
          />
        )}
      />
      }
      
    </Container>
  );
}