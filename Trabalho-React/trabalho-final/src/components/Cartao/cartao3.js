import React from "react";
import { Card, Button } from "react-bootstrap";



export const Cartao3 = ()=>{
    return(
    <>
    <Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771949608480768/BusinessIntelligence_Personalizado.jpg " />
  <Card.Body>
    <Card.Title>Business Intelligence e Data Science</Card.Title>
    <Card.Text>
    O ambiente de negócios está em constante evolução e cada vez mais complexo. 
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771949864325151/ComportamentoProgramador_Personalizado.jpg" />
  <Card.Body>
    <Card.Title>O Programador Apaixonado</Card.Title>
    <Card.Text>
    Você vai aprender habilidades para empreender com a sua carreira.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771950250221588/DataVizTableau_Personalizado.jpg" />
  <Card.Body>
    <Card.Title>Data Viz e Analytics no Tableau: Tableau Your Data!</Card.Title>
    <Card.Text>
    Esta nova edição é companheiro do Tableau.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button> 
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://images-americanas.b2w.io/produtos/6983188/imagens/livro-codigo-limpo-habilidades-praticas-do-agile-software/6983188_1_large.jpg" />
  <Card.Body>
    <Card.Title>Código limpo: Habilidades práticas do Agile Software</Card.Title>
    <Card.Text>
    Mesmo um código ruim pode funcionar. 
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://images-na.ssl-images-amazon.com/images/I/41jtv9WQhVL._SY344_BO1,204,203,200_QL70_ML2_.jpg" />
  <Card.Body>
    <Card.Title>PHP Programando com Orientação a Objetos - 4ª Edição</Card.Title>
    <Card.Text>
    Uma das linguagem mais utilizadas no mundo.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://images-na.ssl-images-amazon.com/images/I/41qeEtBu02L._SX357_BO1,204,203,200_.jpg" />
  <Card.Body>
    <Card.Title>Introdução à Programação com Python </Card.Title>
    <Card.Text>
    Conceitos básicos de programação.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>



    </>);
}