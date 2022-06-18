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
    O ambiente de negócios está em constante evolução e cada vez mais complexo. Exigindo o uso de sistemas computadorizados.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771949864325151/ComportamentoProgramador_Personalizado.jpg" />
  <Card.Body>
    <Card.Title>O Programador Apaixonado</Card.Title>
    <Card.Text>
    Você vai aprender habilidades para empreender com a sua carreira, e assim, ajudamos a levá-la para o caminho que você escolheu: o do sucesso.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987771950250221588/DataVizTableau_Personalizado.jpg" />
  <Card.Body>
    <Card.Title>Data Viz e Analytics no Tableau: Tableau Your Data!</Card.Title>
    <Card.Text>
    Esta nova edição é companheiro do Tableau, ajudando a tirar o máximo proveito deste conjunto de ferramentas de negócios.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button> 
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://images-americanas.b2w.io/produtos/6983188/imagens/livro-codigo-limpo-habilidades-praticas-do-agile-software/6983188_1_large.jpg" />
  <Card.Body>
    <Card.Title>Código limpo: Habilidades práticas do Agile Software</Card.Title>
    <Card.Text>
    Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://images-na.ssl-images-amazon.com/images/I/41jtv9WQhVL._SY344_BO1,204,203,200_QL70_ML2_.jpg" />
  <Card.Body>
    <Card.Title>PHP Programando com Orientação a Objetos - 4ª Edição</Card.Title>
    <Card.Text>
    Uma das linguagem mais utilizadas no mundo por ser flexível e ter clases abrangentes.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '47%' }}>
  <Card.Img style={{ width: '100%' , height : '47%' }} variant="top" src="https://images-na.ssl-images-amazon.com/images/I/41qeEtBu02L._SX357_BO1,204,203,200_.jpg" />
  <Card.Body>
    <Card.Title>Introdução à Programação com Python: Algoritmos e Lógica de Programação Para Iniciantes </Card.Title>
    <Card.Text>
    conceitos básicos de programação, como expressões, variáveis, repetições e muito mais.
    </Card.Text>
    <Button variant="danger">Adicionar ao carrinho</Button>
  </Card.Body>
</Card>



    </>);
}