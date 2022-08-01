import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const Container = styled.div`
  padding: 0 15px;
  width: 25%;
  height: 350px;
  margin-bottom: 20px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.4s;
`;
const Box = styled.div`
  position: relative;
  background-color: #1dcb92;
  height: 100%;
  padding: 15px;
  :hover ${Info} {
    opacity: 1;
    visibility: visible;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: #fff;
  margin: 10px;
  font-size: 30px;
  transition: 0.4s;

  &:hover {
    background-color: #0feeb1;
    transform: scale(1.1);
  }
`;
const CatalogItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Box>
        <Image src={product.img} />
        <Info>
          <Icon onClick={() => dispatch(addToCart(product))}>
            <i className="bx bx-cart-add"></i>
          </Icon>
          <Icon>
            <i className="bx bx-search"></i>
          </Icon>
          <Icon>
            <i className="bx bx-heart"></i>
          </Icon>
        </Info>
      </Box>
    </Container>
  );
};

export default CatalogItem;
