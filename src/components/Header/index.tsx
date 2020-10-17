import React from "react";

import { Container, LogoContainer } from "./styles";
import logo from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <h2>Pizza </h2>
        <img src={logo} alt="" />
        <h2>For Me</h2>
      </LogoContainer>
    </Container>
  );
};

export default Header;
