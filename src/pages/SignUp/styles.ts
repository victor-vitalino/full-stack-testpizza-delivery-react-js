import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fff;
  width: 80vw;
  height: 70vh;

  border-radius: 20px;

  img {
    height: 32vh;
    width: 30vw;
  }
  a {
    padding-top: 5px;
    color: #333;
    text-decoration: none;
    font-weight: bold;
    translate: all 1s;

    &:hover {
      color: #2ecc71;
    }
  }
`;
