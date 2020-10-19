import React from "react";

import { Form } from "@unform/web";

import { StateType } from "typesafe-actions";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { formatPrice } from "../../../util/format";

import { Container, Content } from "./styles";

import firebase from "../../../config/FirebaseConfig";
import Input from "../../../components/Input";

import {
  updateAmountRequest,
  removeFromCart,
} from "../../../store/modules/cart/actions";
import { toast } from "react-toastify";

interface IProduct {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  amount: number;
}

const UserOrders: React.FC = () => {
  let orders = useSelector((state: StateType<any>) => state.cart);
  let uid = useSelector((state: StateType<any>) => state.auth.user.uid);

  const total = formatPrice(
    orders.reduce((total: number, product: IProduct) => {
      return total + product.price * product.amount;
    }, 0)
  );

  const dispatch = useDispatch();
  function increment(product: IProduct) {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product: IProduct) {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }
  function handleRemoveItem(product: IProduct) {
    dispatch(removeFromCart(product.id));
  }

  async function handleForm({ address }: { address: string }) {
    const db = firebase.firestore();

    await db
      .collection("orders")
      .doc()
      .set({
        uid: uid,
        orders,
        address,
        total,
        delivered: false,
      })
      .then(() => {
        toast.success("Pedido feito com sucesso!");
      });
  }
  return (
    <Container>
      <h1>Carrinho</h1>
      <Content>
        <table>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
          {orders[0] &&
            orders.map((item: IProduct) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <div>
                    <button onClick={() => decrement(item)}>
                      <AiOutlineMinusCircle size={24} />
                    </button>
                    <h2>{item.amount}</h2>
                    <button onClick={() => increment(item)}>
                      <AiOutlinePlusCircle size={24} />
                    </button>
                    <button onClick={() => handleRemoveItem(item)}>
                      <BsTrash size={24} />
                    </button>
                  </div>
                </td>
                <td>{item.price}</td>
              </tr>
            ))}
        </table>
      </Content>
      <div>
        <Form onSubmit={handleForm}>
          <Input name="address" type="text" placeholder="Endereço de Entrega" />

          <h3>Total: {total}</h3>
          <button type="submit">Finalizar Pedido</button>
        </Form>
      </div>
    </Container>
  );
};

export default UserOrders;
