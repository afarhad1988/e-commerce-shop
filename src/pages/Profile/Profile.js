import React from "react";
import Layout from "../../components/Layout";
import img from "../../assign/image/profile.png";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 30px;
`;
const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;
const ProfileAccount = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 5;
`;
const Img = styled.img`
  width: 200px;
`;
const FirstName = styled.h4``;
const LastName = styled.h4``;
const Birthday = styled.h4``;
const Email = styled.h4``;
const Telephone = styled.h4``;
const Profile = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <Title>Профиль Пользователя</Title>
          <ProfileAccount>
            <Left>
              <Img src={img} alt="profile" />
            </Left>
            <Right>
              <FirstName>Имя:</FirstName>
              <LastName>Фамилия:</LastName>
              <Birthday>День рождение:</Birthday>
              <Email>Электронная почта:</Email>
              <Telephone>Телефонный номер:</Telephone>
            </Right>
          </ProfileAccount>
        </Wrapper>
      </Layout>
    </>
  );
};

export default Profile;