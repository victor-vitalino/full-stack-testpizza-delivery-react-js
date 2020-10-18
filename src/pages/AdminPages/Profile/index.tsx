import React from "react";

import AvatarInput from "./AvatarInput";

import { Container } from "./styles";

const Profile: React.FC = () => {
  return (
    <Container>
      <form>
        <AvatarInput name="avatar_id" />

        <input name="name" placeholder="Nome Completo" />
        <hr />

        <button type="submit">Atualizar perfil</button>
      </form>
      <button type="button">Sair</button>
    </Container>
  );
};

export default Profile;
