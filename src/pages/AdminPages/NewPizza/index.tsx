import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Container } from "./styles";
import Button from "../../../components/Button";

const NewPizza: React.FC = () => {
  return (
    <Container>
        <h2>Cadastrar novo Sabor</h2>
      <form>
        <input name="name" placeholder="Sabor" />
        <input name="ingredientes" placeholder="Ingredientes" />
        <hr />

        <Button name="cadastrar" type="submit" icon={AiOutlinePlusCircle}>
          Cadastrar sabor
        </Button>
      </form>
    </Container>
  );
};

export default NewPizza;
