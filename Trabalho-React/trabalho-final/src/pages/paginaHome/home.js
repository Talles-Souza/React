import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Topo } from "../../components/headerHome/header";
import { Paginacao } from "../../components/paginacao/paginacao";
import { Cartao } from "../../components/Cartao/cartao";
import { Container, Body, Cont1, Cont11, Cont12,Texto } from "./estiloHome";

export const Inicio = () => {

  return (<>
    <Topo />
    <Container />
    <Body>
      <Cont1>
        <Cont11><h2><Texto>Comece sua jornada na tecnologia</Texto></h2></Cont11>
        <Cont12>
          <Cartao />
          <Paginacao />
        </Cont12>
      </Cont1>
    </Body>
  </>);
}