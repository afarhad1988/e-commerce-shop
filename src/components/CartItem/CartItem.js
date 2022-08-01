import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { decrease, increase } from "../../redux/slices/cartSlice";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid silver;
  margin-bottom: 20px;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const PriceDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Counter = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Image src={item.img} />
      <Details>
        <ProductName>
          <b>Product:</b> {item.title}
        </ProductName>
        <ProductId>
          <b>Id:</b> {item.id}
        </ProductId>
      </Details>
      <PriceDetail>
        <ProductAmountContainer>
          <Counter onClick={dispatch(decrease(item.id))}>-</Counter>
          <ProductAmount>{item.amount}</ProductAmount>
          <Counter onClick={dispatch(increase(item.id))}>+</Counter>
        </ProductAmountContainer>
        <ProductPrice>{item.price}</ProductPrice>
      </PriceDetail>
    </Container>
  );
};

export default CartItem;
