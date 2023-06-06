import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';
import Navigation from './Navigation';

const SiteStyles = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 4rem;
  @media only screen and (max-width: 950px) {
    padding-bottom: 6.3rem;
  }
`;

// eslint-disable-next-line
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteStyles>
        <Navigation />
        {children}
        <Footer />
      </SiteStyles>
    </>
  );
}
