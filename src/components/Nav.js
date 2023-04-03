import { graphql, Link, useStaticQuery } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import React from 'react';
import styled from 'styled-components';
import Search from './search';

const searchIndices = [{ name: `Pages`, title: `Pages` }];

const Navigation = styled.nav`
  width: 100vw;
  height: 100px;
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: rgba(179, 251, 212, 0.8);
  .inline {
    display: flex;
    align-items: center;
  }
  .limit {
    max-width: 1080px;
    width: 1080px;
    justify-content: space-around;
  }
  .search {
    background: var(--white);
    width: 50%;
    height: 40px;
    border-radius: 40px;
    box-shadow: 2px 2px 5px var(--gray);
    justify-content: space-between;
    input {
      width: calc(100% - 40px);
      height: 100%;
      border: none;
      background: none;
      box-shadow: none;
      padding-left: 20px;
      font-size: 75%;
    }
    button {
      width: calc(15% - 40px);
      height: 100%;
      position: relative;
      right: 0;
      margin-right: 20px;
      cursor: pointer;
    }
  }
`;

export default function Nav() {
  const { navitems } = useStaticQuery(graphql`
    query {
      navitems: allSanityNavigation {
        nodes {
          id
          navlogo {
            asset {
              id
            }
            ...ImageWithPreview
          }
          mainalt
          mobilealt
          mobilelogo {
            asset {
              id
            }
            ...ImageWithPreview
          }
        }
      }
    }
  `);

  const { nodes } = navitems;
  return (
    <Navigation>
      {nodes.map((node) => (
        <div className="limit inline" key={node.id}>
          <Link to="/">
            <SanityImage
              {...node.navlogo}
              alt={node.mainalt}
              style={{
                height: '100px',
                objectFit: 'contain',
                auto: 'format',
              }}
            />
          </Link>
          <Search indices={searchIndices} />
        </div>
      ))}
    </Navigation>
  );
}
