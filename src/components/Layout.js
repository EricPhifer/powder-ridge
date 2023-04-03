import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';
import Nav from './Nav';

const SiteStyles = styled.div`
  margin-top: 100px;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 40px;
  @media only screen and (max-width: 950px) {
    padding-bottom: 63px;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteStyles>
        <Nav />
        {children}
        <Footer />
      </SiteStyles>
    </>
  );
}
