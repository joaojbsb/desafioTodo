import React, {useState} from 'react';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Empty } from '../../components/Empty';




import {
  Container, ContainerTitle, ContainerCreated, ContainerFinished, 
  TitleCreated, TitleFinished, NumberCreated, NumberFinished
} from './styles';


export function Home() {
  return (
    <Container>
      <Header />
      <Input 
        placeholder='Digite a tarefa'
        addTask={()=>{}}
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

      <Empty>

      </Empty>
    </Container>
  );
}