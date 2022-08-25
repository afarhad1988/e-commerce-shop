import React, { useEffect } from 'react'

import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import img from '../../assign/image/profile.png'
import Layout from '../../components/Layout'
import { getProfile } from '../../redux/slices/userSlice'

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

const Profile = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])
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
              <Email>Электронная почта:</Email>
              <Telephone>Телефонный номер:</Telephone>
            </Right>
          </ProfileAccount>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default Profile
