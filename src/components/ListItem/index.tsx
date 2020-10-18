import React from "react";

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
      <p>Queijo parmesão, Mussarela, Pimenta, Orégano</p>
      <Button name="adicionar">Adicionar</Button>
    </Container>
  );
};

export default ListItem;
