import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Topo } from "../../components/headerHome/header";
import { Paginacao } from "../../components/paginacao/paginacao";
import { Cartao3 } from "../../components/Cartao/cartao3";
import { Container, Body, Cont1, Cont11, Cont12,Texto } from "./estiloHome";

export const InicioTres = () => {

  return (<>
    <Topo />
    <Container />
    <Body>
      <Cont1>
        <Cont11><h2><Texto>Comece sua jornada na tecnologia</Texto></h2></Cont11>
        <Cont12>
          <Cartao3 />
          <Paginacao/>
        </Cont12>
      </Cont1>
    </Body>
  </>);
}