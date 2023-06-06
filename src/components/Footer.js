import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  ul {
    margin: 0;
    padding: 8vmin 0;
    text-align: center;
    font-size: 1.4rem;
    list-style-type: none;
    @media only screen and (max-width: 350px) {
      font-size: 1rem;
    }
  }
  a {
    text-decoration: none;
    color: gray;
    &:hover {
      color: tomato;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <ul>
        <li>&copy; Powder Ridge HOA {new Date().getFullYear()}</li>
        <li>
          Designed &amp; Developed by{' '}
          <a
            href="https://ericphifer.com/contact"
            target="_blank"
            rel="noreferrer noopener"
          >
            Phifer Web Solutions
          </a>
        </li>
        <li>
          <div />
          <a href="https://powderridgegrandmesa.com/privacypolicy">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="https://powderridgegrandmesa.com/termsconditions">
            Terms &amp; Conditions
          </a>
        </li>
      </ul>
    </FooterStyles>
  );
}
