import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #0a0a10;
  height: 100%;
  min-height: 100vh;
`;
export const Image = styled.img`
  margin-top: 25px;
  width: 280px;
  height: 250px;
`;
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 76px 36px;
  min-height: calc(100vh - 170px);
  border-radius: 10px;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 33px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 342px;
  height: 50px;
  margin-top: 85px;

  border: none;
  outline: none;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.14);

  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const Li = styled.li`
  list-style-type: none;
`;

export const Orders = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  margin-top: 18px;
  width: 342px;

  background: rgba(255, 255, 255, 0.25);
  outline: none;
  border: none;
  border-radius: 10px;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const ListOrders = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #ffffff;
  }
`;
