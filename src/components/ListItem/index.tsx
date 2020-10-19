import React from "react";
import { useDispatch } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";

import { Container, PizzaName } from "./styles";
import Button from "../Button";

import { addToCartRequest } from "../../store/modules/cart/actions";

import logo from "../../assets/logo.svg";

interface IProduct {
  id: string;
  name: string;
  ingredients: string;
  price: number;
}
interface IProps {
  product: IProduct;
}

const ListItem: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch();
  const product = props.product;
  const handleSubmit = () => {
    dispatch(addToCartRequest(product));
  };
  return (
    <Container>
      <img src={logo} alt="" />
      <PizzaName>
        <h2>{product.name}</h2>
      </PizzaName>
      <p>{product.ingredients}</p>
      <p>{product.price}</p>
      <Button name="adicionar" icon={FiShoppingCart} onClick={handleSubmit}>
        Adicionar
      </Button>
    </Container>
  );
};

export default ListItem;
