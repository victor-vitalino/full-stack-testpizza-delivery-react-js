import React from "react";
import { FiSend } from "react-icons/fi";
import firebase from "../../config/FirebaseConfig";
import { useHistory } from "react-router-dom";

import { Container, PizzaName } from "./styles";
import Button from "../Button";

import logo from "../../assets/logo.svg";
import { toast } from "react-toastify";
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
interface IProps {
  product: IProduct;
}
const ListItem: React.FC<IProps> = (props: IProps) => {
  const product = props.product;
  const history = useHistory();

  async function handleDelivered() {
    console.tron.log("enviando");
    const db = firebase.firestore();
    await db
      .collection("orders")
      .doc(product.id)
      .update({
        delivered: true,
      })
      .then(() => {
        toast.success("Pedido Enviado");
        history.push("/");
      });
  }
  return (
    <Container>
      <img src={logo} alt="" />
      <PizzaName>
        <h2>{product.id}</h2>
      </PizzaName>
      <ul>
        {product.orders.map((item: IItem) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Button name="adicionar" icon={FiSend} onClick={handleDelivered}>
        Pedido Enviado
      </Button>
    </Container>
  );
};

export default ListItem;
