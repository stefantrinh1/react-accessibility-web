import React from 'react';
import Hero from './Hero';
import styled from 'styled-components';
import AboutSection from './AboutSection';
import Installation from './Installation';
import Usage from './Usage';

export default function PageContent() {
  return (
    <Container>
      <Hero />
      <AboutSection />
      <Installation />
      <Usage />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
