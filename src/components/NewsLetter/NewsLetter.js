import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #fbf0f4;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`
const Description = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`
const InputContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`
const Input = styled.input`
  border: none;
  padding: 20px;
  flex: 5;
`
const Button = styled.button`
  flex: 2;
  border: none;
  color: #fff;
  background: #106c4f;
  cursor: pointer;
`

const NewsLetter = () => (
  <Container>
    <Title>News Letter</Title>
    <Description>Скидка 10% за подписку на наши новости</Description>
    <InputContainer>
      <Input placeholder="Your email" />
      <Button>Send</Button>
    </InputContainer>
  </Container>
)

export default NewsLetter
