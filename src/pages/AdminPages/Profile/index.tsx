import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "@unform/web";
import Input from "../../../components/Input";

import { LogoutRequest } from "../../../store/modules/auth/actions";

import AvatarInput from "./AvatarInput";

import { Container } from "./styles";

const Profile: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogoutRequest());
  };
  function handleFormSubmit() {}
  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome Completo" />
        <hr />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </Container>
  );
};

export default Profile;
