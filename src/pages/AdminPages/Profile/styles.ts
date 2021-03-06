import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto 0;
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

   
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#3b9eff")};
      }
    }
    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 0.1;
      }
    }
  }

  > button {
    margin: 10px 0 0;
    height: 44px;
    width: 100%;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, "#f64c75")};
    }
  }
`;
