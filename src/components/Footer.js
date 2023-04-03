import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  width: 100vw;
  margin: 0;
  position: absolute;
  bottom: 0;
  background-color: rgba(100, 100, 100, 1);
  color: var(--white);
  font-size: 1rem;
  z-index: 10;
  .inline {
    display: inline-flex;
  }
  .footerContainer {
    padding-bottom: 40px;
  }
  .lowerFooter {
    width: 100%;
    padding: 1rem 0;
    background-color: steelblue;
    position: absolute;
    bottom: 0;
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
      font-size: 1rem;
      li {
        padding-bottom: 0.5rem;
      }
    }
    .inline {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      span {
        padding: 0 1rem;
      }
    }
    .column {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
    }
    a {
      color: var(--white);
      cursor: pointer;
    }
    a:hover {
      border-bottom: 1px solid var(--white);
    }
    a[aria-current='page'] {
      border-bottom: 1px solid var(--white);
    }
  }
  @media only screen and (max-width: 950px) {
    .lowerFooter {
      li {
        padding: 0 1rem;
        font-size: 0.9rem;
      }
      .column {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
      }
      .privTerms li {
        padding-bottom: 0;
      }
    }
  }
`;

export default function Footer() {
  const { footer } = useStaticQuery(graphql`
    query {
      footer: allSanityFooter {
        nodes {
          id
          businessname
          dev
          devlink
          privterms {
            _key
            pagename
            pagelink
          }
        }
      }
    }
  `);

  const { nodes } = footer;
  return (
    <FooterStyles>
      {nodes.map((node) => (
        <div className="footerContainer" key={node.id}>
          <div className="lowerFooter">
            <ul className="footerCredits column">
              <li>
                &copy; All Rights Reserved {node.businessname}{' '}
                {new Date().getFullYear()}
              </li>
              <li>
                <ul className="inline privTerms">
                  <li>
                    <Link to={node.privterms[0].pagelink}>
                      {node.privterms[0].pagename}
                    </Link>
                  </li>
                  <span> | </span>
                  <li>
                    <Link to={node.privterms[1].pagelink}>
                      {node.privterms[1].pagename}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href={node.devlink} rel="noreferrer noopener">
                  Built by {node.dev}
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </FooterStyles>
  );
}
