import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  width: 100%;
  height: 4rem;
  position: absolute;
  bottom: 0;
`;

const List = styled.ul`
  margin: 0;
  padding: 2rem 0;
  text-align: center;
  font-size: 1.4rem;
  list-style-type: none;
  @media only screen and (max-width: 350px) {
    font-size: 1rem;
  }
`;

const Item = styled.li`
  padding: 0.25rem 0;
`;

const Page = styled(Link)`
  text-decoration: none;
  color: steelblue;
  &:hover {
    color: tomato;
  }
`;

const External = styled.a`
  text-decoration: none;
  color: steelblue;
  &:hover {
    color: tomato;
  }
`;

export default function Footer() {
  return (
    <Foot>
      <List>
        <Item>&copy; Powder Ridge HOA {new Date().getFullYear()}</Item>
        <Item>
          Designed &amp; Developed by{' '}
          <External
            href="https://ericphifer.com/contact"
            target="_blank"
            rel="noreferrer noopener"
          >
            Phifer Web Solutions
          </External>
        </Item>
        <Item>
          <Page to="/privacypolicy">Privacy Policy</Page> |{' '}
          <Page to="/termsconditions">Terms &amp; Conditions</Page>
        </Item>
      </List>
    </Foot>
  );
}
