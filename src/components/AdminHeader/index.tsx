import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

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
        <Link to="/dashboard">Pedidos</Link>
        <Link to="/new-pizza">Cadastrar Sabor</Link>
        <Link to="/profile">
          <AiOutlineUser size={24} />
        </Link>
      </HeaderLinks>
    </Container>
  );
};

export default UserHeader;
