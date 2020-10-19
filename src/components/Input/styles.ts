import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  border: 2px solid rgba(0,0,0, 0.4);
  padding: 16px;
  width: 50vw;

  color: #fff;

  margin-top: 8px;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    padding-left: 10px;
    color: #fff;

    &::placeholder {
      color: #fff;
      padding-left: 10px;
    }

    svg {
      margin-right: 16px;
    }
  }
`;
