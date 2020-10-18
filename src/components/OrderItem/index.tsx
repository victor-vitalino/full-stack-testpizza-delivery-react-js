import React from "react";
import { FiSend } from "react-icons/fi";

import { Container, PizzaName } from "./styles";
import Button from "../Button";

import logo from "../../assets/logo.svg";

const ListItem: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="" />
      <PizzaName>
        <h2>Margherita</h2>
      </PizzaName>
      <strong>José Carlos</strong>
      <p>Rua Arlindo Cruz, n°60, joinvile</p>
      <Button name="adicionar" icon={FiSend}>
        Pedido Enviado
      </Button>
    </Container>
  );
};

export default ListItem;
