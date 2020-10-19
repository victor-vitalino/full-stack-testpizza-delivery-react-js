import React from "react";
import { useDispatch } from "react-redux";
import { LogoutRequest } from "../../../store/modules/auth/actions";

import AvatarInput from "./AvatarInput";

import { Container } from "./styles";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(LogoutRequest());
  };
  return (
    <Container>
      <form>
        <AvatarInput name="avatar_id" />

        <input name="name" placeholder="Nome Completo" />
        <hr />

        <button type="submit">Atualizar perfil</button>
      </form>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </Container>
  );
};

export default Profile;
