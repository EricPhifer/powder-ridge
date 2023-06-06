import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

const HomeStyles = styled.div`
  width: 100vw;
  height: 60vh;
`;

const Hero = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const H1 = styled.h1`
  margin: 30vmin 1rem 0;
  color: #fff;
  font-size: 8vmin;
  text-shadow: 3px 3px 10px black;
  font-style: italic;
  font-weight: bold;
  @media only screen and (max-width: 700px) {
    margin: 10rem 1rem;
    font-size: 4rem;
  }
  @media screen only and (max-width: 400px) {
    font-size: 2.22rem;
  }
`;

const Container = styled.div`
  width: 100vw;
  margin: 5vh auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  @media screen only and (max-width: 400px) {
    .homeContent {
      font-size: 1.5rem;
    }
  }
`;

const Pages = styled(Link)`
  text-decoration: none;
  width: 250px;
  height: 250px;
  margin: 2rem;
  padding: 1rem;
  border: 2px solid lightgray;
  box-shadow: 3px 3px 10px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H2 = styled.h2`
  font-family: 'Canto', 'Palatino', 'Gill Sans', 'Gill Sans MT', 'Calibri',
    'Trebuchet MS', sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
  align-self: center;
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 1.5rem;
`;

export default function HomePage() {
  const { homepage } = useStaticQuery(graphql`
    query {
      homepage: allSanityHomepage {
        nodes {
          id
          contents {
            content
            contentURL
            heading
          }
          image {
            asset {
              id
            }
            ...ImageWithPreview
          }
          welcome
        }
      }
    }
  `);

  const node = homepage.nodes;
  return (
    <>
      {node.map((home) => (
        <HomeStyles key={home.id}>
          <Hero>
            <SanityImage
              {...home.image}
              alt="Powder Ridge Homes"
              style={{
                width: '100%',
                height: '60vh',
                objectFit: 'cover',
                auto: 'format',
              }}
            />
            <Overlay>
              <H1>{home.welcome}</H1>
            </Overlay>
          </Hero>
          <Container>
            {home.contents.map((info) => (
              <Pages to={info.contentURL}>
                <H2>{info.heading}</H2>
                <Paragraph>{info.content}</Paragraph>
              </Pages>
            ))}
          </Container>
        </HomeStyles>
      ))}
    </>
  );
}
