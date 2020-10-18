import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 0 30px 0;
  background: #fff;
  height: 100%;
  width: 20vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  img {
    height: 70px;
    margin-bottom: 5px;
  }
`;

export const PizzaName = styled.div`
  display: flex;
  justify-content: center;

  background: rgba(231, 76, 60, 1);
  width: 100%;
  color: #fff;

  padding: 5px 0 5px 0;
  border-radius: 4px;
`;
