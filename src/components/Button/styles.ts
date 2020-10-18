import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  background: rgba(231, 76, 60, 0.8);
  border-radius: 4px;
  border: 2px solid rgba(231, 76, 60, 0.8);
  width: 100%;
  height: auto;
  color: #fff;

  margin-top: 8px;
  transition: all 0.2s;

  :hover {
    background: rgba(231, 76, 60, 1);
  }

  button {
    background: transparent;
    height: 30px;
    width: 100%;
    border: 0;
    color: #fff;
  }
`;
