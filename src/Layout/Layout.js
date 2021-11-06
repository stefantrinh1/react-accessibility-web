import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const PageContainer = styled.div`
  min-height: 100vh;
`;
