import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1`
  margin-bottom: 20px;
`;
const Description = styled.p`
  margin-bottom: 20px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: bisque;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  left: 0;
  list-style: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Nevis</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          expedita ipsa molestias voluptatum. Animi autem consequuntur debitis
          dolore id magnam nam, nostrum provident reiciendis repellendus.
          Dolorum quisquam ullam vitae voluptatibus. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </Description>
        <SocialContainer>
          <SocialIcon>FB</SocialIcon>
          <SocialIcon>Inst</SocialIcon>
          <SocialIcon>TW</SocialIcon>
          <SocialIcon>TG</SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Support</Title>
        <List>
          <ListItem>Статус заказа по номеру</ListItem>
          <ListItem>Центр поддержки Lamoda</ListItem>
          <ListItem>Как оформить заказ</ListItem>
          <ListItem>Как выбрать размер</ListItem>
          <ListItem>Условия доставки</ListItem>
          <ListItem>Мои заказы</ListItem>
          <ListItem>Возврат</ListItem>
          <ListItem>Публичаня оферта</ListItem>
          <ListItem>Программа лояльности</ListItem>
          <ListItem>Часто задаваемые вопросы</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>г.Бишкек ул. Садыгалиева д.1</ContactItem>
        <ContactItem>+ 48-536-392772</ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
