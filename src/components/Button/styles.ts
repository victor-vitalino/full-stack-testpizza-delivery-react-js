import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background: #2ecc71;
  border-radius: 4px;
  border: 2px solid #2ecc71;
  width: 100%;
  height: 50px;
  color: #fff;

  margin-top: 8px;
  transition: all 0.2s;

  :hover {
    background: #27ae60;
  }

  button {
    background: transparent;
    height: 30px;
    width: 100%;
    border: 0;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    svg{
      padding-right:5px;
    }
  }
`;
