import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  width: auto;
  height:auto;

  margin: 5px;
  background: #fff; 
  border-radius:4px;

  h1{
    
      height:50px;
      width:100%;
      border-bottom:1px solid #eee;
      text-align:center;
    
  }
`;
export const GridContainer = styled.div`
  display: grid;
  height: 80%;
  width: 100%;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px 5px;

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
