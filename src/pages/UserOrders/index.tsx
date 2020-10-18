import React from "react";

import { Container, Content } from "./styles";

const UserOrders: React.FC = () => {
  return (
    <Container>
      <h1>PEDIDOS</h1>
      <Content>
        <table>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Situação</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>

          <tr>
            <td>12asd3a2s1</td>
            <td>Margherita</td>
            <td>+</td>
            <td>1</td>
            <td>19.00</td>
            <td>17/10/2020</td>
          </tr>
          <tr>
            <td>12asd3a2s1</td>
            <td>Margherita</td>
            <td>+</td>
            <td>1</td>
            <td>19.00</td>
            <td>17/10/2020</td>
          </tr>
          <tr>
            <td>12asd3a2s1</td>
            <td>Margherita</td>
            <td>+</td>
            <td>1</td>
            <td>19.00</td>
            <td>17/10/2020</td>
          </tr>
          <tr>
            <td>12asd3a2s1</td>
            <td>Margherita</td>
            <td>+</td>
            <td>1</td>
            <td>19.00</td>
            <td>17/10/2020</td>
          </tr>
          <tr>
            <td>12asd3a2s1</td>
            <td>Margherita</td>
            <td>+</td>
            <td>1</td>
            <td>19.00</td>
            <td>17/10/2020</td>
          </tr>
          
          
        </table>
      </Content>
    </Container>
  );
};

export default UserOrders;
