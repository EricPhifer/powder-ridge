import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

const HomeStyles = styled.div`
  width: 100vw;
  min-height: 100%;
`;

const Hero = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  margin: 0;
  padding: 0;
  img {
    width: 100%;
    height: 60vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  @media only screen and (max-width: 750px) {
    top: 7rem;
  }
  @media only screen and (max-width: 400px) {
    height: 50vh;
    img {
      height: 50vh;
    }
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const H1 = styled.h1`
  max-width: 56vw;
  position: absolute;
  bottom: 2rem;
  color: #fff;
  font-size: 8vmin;
  text-shadow: 0.3rem 0.3rem 1rem black;
  font-style: italic;
  font-weight: 700;
  @media only screen and (max-width: 700px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 652px) {
    max-width: 75vw;
  }
  @media only screen and (max-width: 400px) {
    font-size: 2.45rem;
  }
`;

const Grid = styled.div`
  width: 100vw;
  margin: 7rem auto 5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  justify-items: center;
  @media only screen and (max-width: 652px) {
    grid-template-columns: repeat(1, minmax(auto, 1fr));
  }
  @media screen only and (max-width: 400px) {
    .homeContent {
      font-size: 1.5rem;
    }
  }
`;

const Pages = styled(Link)`
  text-decoration: none;
  max-width: 40rem;
  height: 25rem;
  margin: 1rem;
  padding: 0 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    box-shadow: 0.7px 0.7px 2.2px rgba(0, 0, 0, 0.02),
      1.7px 1.7px 5.3px rgba(0, 0, 0, 0.028),
      3.1px 3.1px 10px rgba(0, 0, 0, 0.035),
      5.6px 5.6px 17.9px rgba(0, 0, 0, 0.042),
      10.4px 10.4px 33.4px rgba(0, 0, 0, 0.05),
      25px 25px 80px rgba(0, 0, 0, 0.07);
  }
`;

const H2 = styled.h2`
  font-style: italic;
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
  align-self: center;
`;

export default function HomePage() {
  const { homepage } = useStaticQuery(graphql`
    query {
      homepage: allSanityHomepage {
        nodes {
          id
          welcome
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
                objectFit: 'cover',
                auto: 'format',
              }}
            />
            <Overlay>
              <H1>{home.welcome}</H1>
            </Overlay>
          </Hero>
          <Grid>
            {home.contents.map((info) => (
              <Pages to={info.contentURL}>
                <H2>{info.content}</H2>
              </Pages>
            ))}
          </Grid>
        </HomeStyles>
      ))}
    </>
  );
}

export const Head = () => <title>Powder Ridge HOA - Home</title>;
