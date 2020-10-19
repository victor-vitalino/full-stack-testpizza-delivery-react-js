import styled from "styled-components";

export const Container = styled.nav`
  width: 100vw;
  height: 60px;
  background: rgba(231, 76, 60, 1);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  -webkit-box-shadow: 0px 10px 8px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 8px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 8px -10px rgba(0, 0, 0, 0.75);
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  box-shadow: #333;

  img {
    height: 40px;
  }
  h2 {
    color: #fff;
    font-weight: bold;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-right: 30px;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    margin-left: 10px;

    transform: all 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
  button {
    background: transparent;
    border: 0;
    padding: 0px 5px 0px 5px;
    &:hover {
      opacity: 0.7;
    }
    svg {
      color: #fff;
    }
  }
`;
