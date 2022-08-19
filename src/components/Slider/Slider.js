import React, { useState } from 'react'
import styled from 'styled-components'
import { slides } from '../../data'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
`
const Wrapper = styled.div`
  height: 100%;
  transition: 0.4s;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`
const Image = styled.img`
  width: 50vw;
  height: 90%;
  object-fit: contain;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 60px;
`
const Description = styled.p`
  font-size: 24px;
  margin: 40px 0;
`
const Button = styled.button`
  padding: 10px;
  background: none;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  color: white;
  background: #106c4f;
`
const Arrow = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  font-size: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  transition: 0.4s;
  left: ${(props) => (props.direction === 'left' ? '30px' : 'unset')};
  right: ${(props) => (props.direction === 'right' ? '30px' : 'unset')};
  :hover {
    color: aqua;
  }
`
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slides.length - 1)
    }
    if (direction === 'right') {
      setSlideIndex(slideIndex < slides.length - 1 ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow onClick={() => handleClick('left')} direction="left">
        <i className="bx bxs-chevron-left" />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slides.map((slide) => (
          <Slide bg={slide.bgColor} key={slide.id}>
            <ImageContainer>
              <Image src={slide.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Description>{slide.desc}</Description>
              <Button>Buy now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow onClick={() => handleClick('right')} direction="right">
        <i className="bx bxs-chevron-right" />
      </Arrow>
    </Container>
  )
}

export default Slider
