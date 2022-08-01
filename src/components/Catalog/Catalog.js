import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CatalogItem from "../CatalogItem";

const Container = styled.div`
  margin: 20px -15px 0;
  display: flex;
  flex-wrap: wrap;
`;
const Catalog = () => {
  const { products } = useSelector((s) => s.catalog);
  return (
    <Container>
      {products.map((product) => (
        <CatalogItem product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Catalog;
