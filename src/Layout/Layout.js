import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import Favicon from '../assets/react-accessibility-logo.png';

export default function Layout({ children }) {
  const title =
    'React Accessibility - A Simple But Powerful Accessbility Widget';
  const url = 'https://react-accessibility-widget.netlify.app/';
  const description =
    'React Accessibility - A Simple But Powerful Accessbility Widget';
  const twitterUsername = '@stefantrinh';
  const ogImage =
    'https://res.cloudinary.com/dpakxm3nm/image/upload/v1636162041/react-accessibility/react-accessibility_wricvk_knxnqc.png';

  return (
    <Container>
      <SEO
        title={title}
        description={description}
        url={url}
        ogImage={ogImage}
        twitterUsername={twitterUsername}
        favicon={Favicon}
      />
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
