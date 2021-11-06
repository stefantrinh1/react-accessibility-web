import React from 'react';
import styled from 'styled-components';

export default function Hero() {
  return (
    <Container>
      <TextContent>
        <h1>React Accessbility</h1>
        <h3>A Simple But Powerful Accessbility Widget</h3>
        <p>
          Click the "blue accessibility button" in the bottom right corner of
          the screen and change the design ui what works for you.
        </p>
      </TextContent>

      <ImageContainer>
        <img
          src={
            'https://res.cloudinary.com/dpakxm3nm/image/upload/v1636162041/react-accessibility/react-accessibility_wricvk_knxnqc.png'
          }
        />
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-items: center;
  justify-content: center;
  background-color: black;

  overflow: hidden;
  @media only screen and (min-width: 767px) {
    flex-direction: row;
    /* height: 100vh; */
  }
`;

const TextContent = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  h1 {
    font-size: 3rem;
    color: white;
  }

  h3 {
    color: purple;
    font-size: 2rem;
  }
  p {
    color: #818181;
  }
  @media only screen and (min-width: 767px) {
    width: 50%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
  @media only screen and (min-width: 767px) {
    width: 50%;
  }
`;
