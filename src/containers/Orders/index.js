import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Pacote from "../../assets/burger2.svg";
import Trash from "../../assets/trash.svg";

import {
  Container,
  Image,
  ContainerItems,
  H1,
  Button,
  Li,
  Orders,
  ListOrders,
} from "./styles";

const Pedidos = () => {
  const [orders, setOders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/order"
      );

      setOders(newOrders);
    };
    fetchOrders();
  }, []);

  const deleteOrder = async (orderId) => {
    await axios.delete(`http://localhost:3001/order/${orderId}`);
    const newOders = orders.filter((order) => order.id !== orderId);
    setOders(newOders);
  };

  const goBackPage = () => {
    navigate("/");
  };

  return (
    <Container>
      <Image src={Pacote} alt="Logo-Burger" />
      <ContainerItems>
        <H1>Pedidos</H1>

        <ul>
          {orders.map((listOrder) => (
            <Li key={listOrder.id}>
              <Orders>
                <ListOrders>
                  <p>{listOrder.order}</p>
                  <br />
                  <p>
                    <strong>{listOrder.clientName}</strong>
                  </p>
                </ListOrders>
                <button onClick={() => deleteOrder(listOrder.id)}>
                  <img src={Trash} alt="lata-de-lixo" />
                </button>
              </Orders>
            </Li>
          ))}
        </ul>
        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItems>
    </Container>
  );
};
export default Pedidos;
