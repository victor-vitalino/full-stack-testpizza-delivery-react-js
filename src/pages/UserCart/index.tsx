import React from "react";

import { Container, Content } from "./styles";

const UserOrders: React.FC = () => {
  return (
    <Container>
      <h1>Carrinho</h1>
      <Content>
        <table>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>

          <tr>
            <td>12asd3a2s1</td>
            <td>Margherita</td>00
            <td>
              <button>-</button>1<button>+</button>
            </td>
            <td>19.00</td>
          </tr>
        </table>
      </Content>
      <div>
        <input type="text" placeholder="Endereço de Entrega" />

        <h3>Total: 19.00 R$</h3>
        <button>Finalizar Pedido</button>
      </div>
    </Container>
  );
};

export default UserOrders;
