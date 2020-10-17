import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import { Container, Content } from "./styles";
import Input from "../../components/Input";
import Logo from "../../assets/logo.svg";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo pizza for me" />
        <form>
          <Input icon={FiMail} name="email" type="email" placeholder="E-Mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
        </form>
      </Content>
    </Container>
  );
};

export default SignIn;
