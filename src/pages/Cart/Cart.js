import React, { useEffect } from "react";
import Announcement from "../../components/Announcement";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ButtonTemplate } from "../../mixin";
import { calculateTotal } from "../../redux/slices/cartSlice";
import Summary from "../../components/Summary";

const Cart = () => {
  const Container = styled.div``;
  const Wrapper = styled.div`
    padding: 40px 30px;
  `;
  const Top = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  `;
  const Title = styled.div``;
  const TopButton = styled.button`
    ${ButtonTemplate}
  `;

  const Bottom = styled.div`
    display: flex;
  `;
  const Info = styled.div`
    flex: 3;
  `;

  const { cart, totalAmount } = useSelector((s) => s.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, totalAmount]);
  return (
    <div>
      <Announcement />
      <Header />
      <Container>
        <Wrapper>
          <Top>
            <TopButton onClick={() => navigate("/")}>
              Продолжить покупки
            </TopButton>
            <Title>Ваша корзина</Title>
          </Top>
          <Bottom>
            <Info>
              {cart.length ? (
                cart.map((item) => <CartItem key={item.id} item={item} />)
              ) : (
                <h2>
                  Корзина пуста
                  <span>
                    {" "}
                    <i className="bx bx-cart-download"></i>
                  </span>
                </h2>
              )}
            </Info>
            {cart.length ? <Summary /> : ""}
          </Bottom>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
