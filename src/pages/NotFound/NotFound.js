import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'

const NotFound = () => {
  const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
  `
  const Icon = styled.div``
  const Subtitle = styled.p`
    font-size: 22px;
    text-align: center;
    margin-bottom: 100px;
  `
  return (
    <Layout>
      <Title>
        <Icon>😕</Icon>
        Ничего не найдено
      </Title>
      <Subtitle>
        К сожалению данная страница отсутствует в нашем интернет-магазине
      </Subtitle>
    </Layout>
  )
}

export default NotFound
