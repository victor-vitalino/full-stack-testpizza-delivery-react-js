import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Container, LogoContainer, HeaderLinks } from "./styles";
import logo from "../../assets/logo.svg";

const UserHeader: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <h2>Pizza </h2>
        <img src={logo} alt="" />
        <h2>For Me</h2>
      </LogoContainer>

      <HeaderLinks>
        <Link to="/pizza-menu">Cardápio</Link>
        <Link to="/my-orders">Meus Pedidos</Link>
        <Link to="/cart">
          <AiOutlineShoppingCart size={24} />
        </Link>
      </HeaderLinks>
    </Container>
  );
};

export default UserHeader;
