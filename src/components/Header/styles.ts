import styled from "styled-components";

export const Container = styled.nav`
  width: 100vw;
  height: 60px;
  background: rgba(231, 76, 60, 1);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  -webkit-box-shadow: 0px 10px 8px -10px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 10px 8px -10px rgba(0,0,0,0.75);
box-shadow: 0px 10px 8px -10px rgba(0,0,0,0.75);
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
