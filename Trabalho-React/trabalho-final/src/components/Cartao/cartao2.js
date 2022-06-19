import React from "react";
import { Card, Button } from "react-bootstrap";



export const Cartao2 = ()=>{
    return(
    <>
    <Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771949151313982/ApiSpring_Personalizado.jpg " />
  <Card.Body>
    <Card.Title>Spring Boot: Microsserviços na prática</Card.Title>
    <Card.Text>
    Este livro é um guia básico para a criação de microsserviços utilizando o framework Spring Boot.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771948937379860/ApiPostgreeSQL_Personalizado.jpg" />
  <Card.Body>
    <Card.Title>PostgreSQL - Guia do Programador</Card.Title>
    <Card.Text>
     Todos os passos necessários para conhecer e utilizar o PostgreSQL.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771904167391282/React_Personalizado.jpg" />
  <Card.Body>
    <Card.Title>React - Aprenda Praticando</Card.Title>
    <Card.Text>
    Desenvolva Aplicações web Reais com uso da Biblioteca React.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771904347750470/ReactNative_Personalizado.jpg" />
  <Card.Body>
    <Card.Title>React Native: Desenvolvimento de aplicativos mobile</Card.Title>
    <Card.Text>
    Básico com React Native até o desenvolvimento de aplicações.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771904528093294/Scrum_Personalizado.jpg" />
  <Card.Body>
    <Card.Title>Scrum: A arte de fazer o dobro do trabalho na metade do tempo</Card.Title>
    <Card.Text>
     Método de gerenciamento de projetos.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771903982854274/MachineLearning_Personalizado.jpg" />
  <Card.Body>
    <Card.Title>Machine Learning – Guia de Referência Rápida</Card.Title>
    <Card.Text>
    Com notas, tabelas e exemplos detalhados. 
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>



    </>);
}