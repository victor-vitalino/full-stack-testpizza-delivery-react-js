import React from "react";
import { useDispatch } from "react-redux";
import { LogoutRequest } from "../../store/modules/auth/actions";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai";

import { Container, LogoContainer, HeaderLinks } from "./styles";
import logo from "../../assets/logo.svg";

const UserHeader: React.FC = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(LogoutRequest());
  };
  return (
    <Container>
      <LogoContainer>
        <h2>Pizza </h2>
        <img src={logo} alt="" />
        <h2>For Me</h2>
      </LogoContainer>

      <HeaderLinks>
        <Link to="/pizza-menu">Cardápio</Link>
        <Link to="/cart">
          <AiOutlineShoppingCart size={24} />
        </Link>
        <button type="button" onClick={handleLogout}>
          <AiOutlineLogout size={24} />
        </button>
      </HeaderLinks>
    </Container>
  );
};

export default UserHeader;
