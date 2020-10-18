import React from "react";

import { Container, GridContainer } from "./styles";
import OrderItem from '../../../components/OrderItem'

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <h1>dashboard</h1>
        <GridContainer>
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </GridContainer>
      </Container>
    </>
  );
};

export default Dashboard;
