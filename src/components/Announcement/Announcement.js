import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background-color: #106c4f;
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0;
`;
const Announcement = () => {
  return <Container>Получи скидку 20% при заказе товара более 100$</Container>;
};

export default Announcement;
