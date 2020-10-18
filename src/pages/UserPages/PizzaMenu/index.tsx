import React from "react";

import { Container, GridContainer } from "./styles";
import ListItem from "../../../components/ListItem";


const PizzaMenu: React.FC = () => {
  return (
    <>
      <Container>
        <GridContainer>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </GridContainer>
      </Container>
    </>
  );
};

export default PizzaMenu;
