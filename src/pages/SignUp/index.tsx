import React from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";

import { Container, Content } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../assets/logo.svg";

import { CreateNewUserRequest } from "../../store/modules/auth/actions";

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    dispatch(CreateNewUserRequest({ email, password }));
  };
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo pizza for me" />
        <h3>Cadastro</h3>
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
            Cadastrar
          </Button>
        </Form>
        <Link to="/">Já tenho uma conta</Link>
      </Content>
    </Container>
  );
};

export default SignUp;
