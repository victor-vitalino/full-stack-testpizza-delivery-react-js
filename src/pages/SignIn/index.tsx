import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import { Container, Content } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../assets/logo.svg";

const SignIn: React.FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo pizza for me" />
        <h3>Login/Cadastro</h3>
        <form>
          <Input icon={FiMail} name="email" type="email" placeholder="E-Mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit" icon={FiLogIn} name="entrar">
            Entrar
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default SignIn;
