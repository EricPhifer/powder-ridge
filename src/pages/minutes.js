import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import MinutesItemGrid from '../components/MinutesItemGrid';

const MinuteStyles = styled.div`
  width: 100vw;
  min-height: 100%;
  @media only screen and (max-width: 750px) {
    margin-top: 8rem;
  }
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

export default function Minutes() {
  const { hero } = useStaticQuery(graphql`
    query {
      hero: allSanityMinutehero {
        nodes {
          id
          heromsg
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
  const { nodes } = hero;
  return (
    <>
      {nodes.map((heroes) => (
        <MinuteStyles key={heroes.id}>
          <Hero>
            <SanityImage
              {...heroes.image}
              alt="Powder Ridge Skiing"
              style={{
                objectFit: 'cover',
                auto: 'format',
              }}
            />
            <Overlay>
              <H1>{heroes.heromsg}</H1>
            </Overlay>
          </Hero>
        </MinuteStyles>
      ))}
      <MinutesItemGrid />
    </>
  );
}
