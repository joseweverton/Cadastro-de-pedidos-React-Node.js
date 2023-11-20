import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Burguer from "../../assets/burger.png";

import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

const App = () => {
  const [orders, setOders] = useState([]);
  const navigate = useNavigate();

  const inputOrder = useRef();
  const inputClientName = useRef();

  const addNewOrder = async () => {
    const { data: newOrders } = await axios.post(
      "http://localhost:3001/order",
      {
        order: inputOrder.current.value,
        clientName: inputClientName.current.value,
      }
    );

    setOders([...orders, newOrders]);

    navigate("/pedidos");
  };

  return (
    <Container>
      <Image src={Burguer} alt="Logo-Burger" />
      <ContainerItems>
        <H1>Faça seu pedido</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Ex: 1 Coca-Cola, 1-X Salada" />
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClientName} placeholder="Digite seu nome" />
        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItems>
    </Container>
  );
};
export default App;
