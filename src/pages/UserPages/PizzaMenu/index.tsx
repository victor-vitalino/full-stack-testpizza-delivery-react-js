import React, { useState, useEffect, useCallback } from "react";
import firebase from "../../../config/FirebaseConfig";

import { Container, GridContainer } from "./styles";
import ListItem from "../../../components/ListItem";

interface IProduct {
  id: string;
  name: string;
  ingredients: string;
  price: number;
}
const PizzaMenu: React.FC = () => {
  const [pizzas, setPizzas] = useState<IProduct[]>([]);

  useEffect(() => {
    async function handle() {
      const dataArray: IProduct[] = [];
      const db = firebase.firestore();
      await db
        .collection("pizzas")
        .get()
        .then((data) => {
          data.forEach((doc) => {
            const id = doc.id;
            const data = doc.data();

            const pizza = {
              id: id,
              name: data.name,
              ingredients: data.ingredients,
              price: Number(data.price),
            };
            dataArray.push(pizza);
          });
        });
      setPizzas(dataArray);
    }
    handle();
  }, []);

  return (
    <>
      <Container>
        {!pizzas[1] ? (
          <h2>Carregando Cardápio</h2>
        ) : (
          <>
            <h2> Cardápio</h2>
           <br/>
            <GridContainer>
              {pizzas.map((product) => (
                <ListItem key={product.id} product={product} />
              ))}
            </GridContainer>
          </>
        )}
      </Container>
    </>
  );
};

export default PizzaMenu;
