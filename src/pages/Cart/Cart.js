import React from "react";
import Announcement from "../../components/Announcement";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import styled from "styled-components";

const Cart = () => {
  const Container = styled.div``;
  const Wrapper = styled.div``;
  const Title = styled.div``;
  const TopButton = styled.div``;
  const Info = styled.div``;

  const { cart } = useSelector((s) => s.cart);
  return (
    <div>
      <Announcement />
      <Header />
      <Container>
        <Wrapper>
          <Title>Ваша корзина</Title>
          <TopButton>Продолжить покупки</TopButton>
          <Info>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </Info>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
