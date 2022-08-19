import React from 'react'

import styled from 'styled-components'
import { useSelector } from 'react-redux'
import img from '../../assign/image/profile.png'
import Layout from '../../components/Layout'

const Container = styled.div`
  background: #fbf0f4;
  padding: 50px 40px;
`
const Wrapper = styled.div``
const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`
const ProfileAccount = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 5;
`
const Img = styled.img`
  width: 200px;
`
const FirstName = styled.h4``
const LastName = styled.h4``
const Birthday = styled.h4``
const Email = styled.h4``
const Telephone = styled.h4``
const Span = styled.span`
  font-weight: 100;
`
const Profile = () => {
  const { user } = useSelector((s) => s.user)
  return (
    <Layout>
      <Container>
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
              <Email>
                Электронная почта: <Span>{user.email}</Span>
              </Email>

              <Telephone>Телефонный номер:</Telephone>
            </Right>
          </ProfileAccount>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default Profile
