import React from 'react';
import styled from 'styled-components';

export default function Usage() {
  return (
    <Container>
      <h2>Usage</h2>
      <h4>Extremely simple to use</h4>
      <p>import a single component and use in your JSX</p>
      <code>{`import { AccessibilityWidget } from 'react-accessibility'`}</code>
      <p>Alternatively you may use yarn:</p>
      <code>{`<AccessibilityWidget />`}</code>
    </Container>
  );
}

const Container = styled.div`
  background-color: #e4e4e4;
  padding: 2rem 1rem;
  width: 100%;
  h2 {
    color: black;
    font-size: 4rem;
    margin: 0rem 0rem 2rem;
  }

  h4 {
    font-size: 2rem;
    color: purple;
  }
  p {
    margin: 0rem 0rem 2rem;
    color: black;
  }
  code {
    color: white;
    background-color: #202020;
    padding: 1rem;
    display: flex;
    margin-bottom: 2rem;
  }
  .special-text {
    color: #0972b1;
    font-weight: bold;
  }
  @media only screen and (min-width: 767px) {
    padding: 5rem;

    h2 {
      font-size: 4rem;
    }
  }
`;
