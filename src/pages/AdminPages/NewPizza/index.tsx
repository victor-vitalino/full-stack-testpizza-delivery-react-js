import React, { useRef } from "react";
import { Form } from "@unform/web";
import { AiOutlinePlusCircle } from "react-icons/ai";

import Input from "../../../components/Input";

import { Container } from "./styles";
import Button from "../../../components/Button";

import firebase from "../../../config/FirebaseConfig";
import { toast } from "react-toastify";

const NewPizza: React.FC = () => {
  const handleSubmit = async ({
    name,
    ingredients,
    price,
  }: {
    name: string;
    ingredients: string;
    price: number;
  }) => {
    const db = firebase.firestore();
    db.collection("pizzas")
      .doc()
      .set({
        name: name,
        ingredients: ingredients,
        price: price,
      })
      .then(() => {
        toast.success("Nova pizza adicionada");
      })
      .catch(() => {
        toast.error("Aconteceu um erro");
      });
  };
  return (
    <Container>
      <h2>Cadastrar novo Sabor</h2>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Sabor" />
        <Input name="ingredients" placeholder="ingredients" />
        <Input name="price" placeholder="Preço" />
        <hr />

        <Button name="cadastrar" type="submit" icon={AiOutlinePlusCircle}>
          Cadastrar sabor
        </Button>
      </Form>
    </Container>
  );
};

export default NewPizza;
