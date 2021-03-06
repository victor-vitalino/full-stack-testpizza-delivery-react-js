import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";

import { Container, Content } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../assets/logo.svg";

import { LoginRequest } from "../../store/modules/auth/actions";

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    dispatch(LoginRequest({ email, password }));
  };
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo pizza for me" />
        <h3>Login</h3>
        <Form
          onSubmit={handleSubmit}
          initialData={{
            email: "dev@dev.com",
          }}
        >
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
        </Form>
        <Link to="/register">Criar uma conta</Link>
      </Content>
    </Container>
  );
};

export default SignIn;
