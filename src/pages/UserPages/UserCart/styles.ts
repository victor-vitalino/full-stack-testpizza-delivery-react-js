import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  margin: 30px;
  height: 80vh;
  border-radius: 5px;

  background: #fff;
`;

export const Content = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 10px;

  table {
    width: 100%;
    cursor: pointer;

    tr {
      height: 30px;
      &:hover {
        background: #eee;
      }
    }
    th,
    td {
      text-align: center;
    }
  }
  table,
  th {
    border: 1px solid #eee;
    border-collapse: collapse;
  }
  td {
    > div {
      display: flex;
      flex-direction: row;

      button {
        background: transparent;
        border: 0;
        margin: 0px 2px;
        transition: all 0.5s;

        &:hover {
          svg {
            color: #2ecc71;
          }
        }
      }
    }
  }
`;
export const HeadContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25px;
  background: #95a5a6;
  border-radius: 4px;

  strong {
    margin: 0px 10px 0px 10px;
    color: #fff;
    font-size: 18px;
    padding-left: 10px;
    & + strong {
      border-left: 1px solid #fff;
    }
  }
`;
