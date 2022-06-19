import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Topo } from "../../components/headerHome/header";
import { Paginacao } from "../../components/paginacao/paginacao";
import { Cartao2 } from "../../components/Cartao/cartao2";
import { Container, Body, Cont1, Cont11, Cont12, Texto } from "./estiloHome";

export const InicioDois = () => {

  return (<>
    <Topo />
    <Container />
    <Body>
      <Cont1>
        <Cont11><h2><Texto>Aqui você encontra os melhores livros</Texto></h2></Cont11>
        <Cont12>
          <Cartao2 />
          <Paginacao />
        </Cont12>
      </Cont1>

    </Body>
  </>);
}