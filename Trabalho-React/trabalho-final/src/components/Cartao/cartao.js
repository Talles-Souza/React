import React from "react";
import { Card, Button } from "react-bootstrap";



export const Cartao = ()=>{
    return(
    <>
    <Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771903773114378/LogicaDeProg_Personalizado.jpg " />
  <Card.Body>
    <Card.Title>Lógica de programação</Card.Title>
    <Card.Text>
    Neste livro, você encontrará informações básicas sobre lógica de programação. Dividida em 10 capítulos, aborda os principais temas e com exercícios.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771949361020978/BancoDeDados_Personalizado.jpg" />
  <Card.Body>
    <Card.Title>Banco de dados: Teoria e Desenvolvimento</Card.Title>
    <Card.Text>
    Este livro aborda os principais fundamentos de bancos de dados, como tipos de acesso a arquivos, estruturas de dados, métodos de ordenação etc.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://m.media-amazon.com/images/I/41VpoIFYowL._SY346_.jpg" />
  <Card.Body>
    <Card.Title>Java e Orientação a Objetos: iniciante</Card.Title>
    <Card.Text>
    Aprenda Orientação a Objetos com Java de forma simple, Você compilará e executará seu próprio programa em algumas horas.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771950711603240/JavaEclipse_Personalizado.jpg" />
  <Card.Body>
    <Card.Title>Eclipse 3.1 - Programando Com Visual Editor - 2ª Edição</Card.Title>
    <Card.Text>
    Este livro tem o propósito de ensinar como começar a produzir aplicações comerciais em Java com a ferramenta Eclipse.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771950451539988/HTMLCSS_Personalizado.jpg" />
  <Card.Body>
    <Card.Title>HTML e CSS: projete e construa websites</Card.Title>
    <Card.Text>
     A melhor maneira de aprender HTML e CSS. Se você quer projetar, construir do zero ou ter mais controle sobre um site existente, este livro é ideal pra você.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771895585837056/JavaScript_Personalizado.jpg" />
  <Card.Body>
    <Card.Title>Javascript: Básico ao Avançado</Card.Title>
    <Card.Text>
    Livro para iniciantes na área de programação que explica a linguagem desde os comandos mais básicos até os conceitos mais complexos
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>
    </>);
}