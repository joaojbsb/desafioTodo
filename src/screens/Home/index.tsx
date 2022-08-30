import React, {useState} from 'react';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Empty } from '../../components/Empty';
import { TaskList, TaskProps } from '../../components/TaskList';
import { FlatList } from 'react-native';



import {
  Container, ContainerTitle, ContainerCreated, ContainerFinished, 
  TitleCreated, TitleFinished, NumberCreated, NumberFinished
} from './styles';




export function Home() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function addNewTask(task:string){
    const newTask = {
      id: new Date().getTime(),
      name: task,
      done: false
    };
    setTasks(oldTasks => [...oldTasks, newTask]);
  };

  console.log(tasks);

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
              0
          </NumberCreated>
        </ContainerCreated>

        <ContainerFinished>
          <TitleFinished>
            Concluídas
          </TitleFinished>
          <NumberFinished>
              0
          </NumberFinished>
        </ContainerFinished>

      </ContainerTitle>


      <Empty />

      <FlatList 
        data={tasks}
        keyExtractor={item=> (String(item.id))}
        renderItem={({ item })=>(
          <TaskList 
            id={item.id}
            name={item.name}
            done={item.done}
          />
        )}
      />

      
    </Container>
  );
}