import React from "react";
import { Topo } from "../../components/headerHome/header";
import { Carros } from "../../components/Carro/carro";
import { Container } from "./barraCinza";
export const Carrinho = () =>{
    return (<>
    <Topo/>
     <Container/>
    <Carros/>
    </>);
}