import React, { useEffect, useState } from "react";
import firebase from "../../../config/FirebaseConfig";

import { Container, GridContainer } from "./styles";
import OrderItem from "../../../components/OrderItem";
import produce from "immer";

interface IProduct {
  id: string;
  address: string;
  total: string;
  orders: IItem[];
  delivered: boolean;
}
interface IItem {
  amount: string;
  ingredients: string;
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const [pizzas, setPizzas] = useState<IProduct[]>([]);

  useEffect(() => {
    async function handle() {
      const dataArray: IProduct[] = [];
      const db = firebase.firestore();
      await db
        .collection("orders")
        .get()
        .then((data) => {
          data.forEach((doc) => {
            const data = doc.data();
            const id = doc.id;

            if (!data.delivered) {
              const pizza = {
                id: id,
                delivered: data.delivered,
                total: data.total,
                orders: data.orders,
                address: data.address,
              };
              dataArray.push(pizza);
            }
          });
        });
      setPizzas(dataArray);
    }
    handle();
  }, []);
  return (
    <>
      <Container>
        <h1>dashboard</h1>
        <GridContainer>
          {!pizzas[0] && <h2>Não há pedidos</h2>}
          {pizzas.map((product, i) => (
            <OrderItem key={i} product={product} />
          ))}
        </GridContainer>
      </Container>
    </>
  );
};

export default Dashboard;
