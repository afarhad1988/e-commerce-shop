import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";
import Announcement from "../Announcement";

const Layout = ({ children }) => {
  const Container = styled.div`
    justify-content: center;
    align-items: center;
  `;
  return (
    <>
      <Announcement />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
