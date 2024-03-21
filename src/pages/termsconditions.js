import { defaultComponents, PortableText } from '@portabletext/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const TermStyles = styled.div`
  max-width: 700px;
  word-wrap: break-word;
  .overlord {
    max-width: 90rem;
    margin: 7rem auto 0;
    background-color: #fff;
    padding: 2rem 2rem 15rem;
    @media only screen and (max-width: 500px) {
      padding: 2rem 2rem 18rem;
    }
  }
  p {
    padding: 0.5rem 0;
  }
  p:first-child {
    padding: 0;
    margin: 0;
  }
  h1 {
    font-size: 5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  .termsContainer {
    max-width: 60rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .updateDate,
  h1 {
    text-align: center;
  }
  @media only screen and (max-width: 900px) {
    margin: 0 auto;
  }
  @media only screen and (max-width: 450px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default function TermsConditions() {
  const { terms } = useStaticQuery(graphql`
    query {
      terms: allSanityTermsconditions {
        nodes {
          id
          title
          _rawContent
        }
      }
    }
  `);
  const { nodes } = terms;
  return (
    <TermStyles>
      <div className="overlord">
        {nodes.map((term) => (
          <section key={term.id}>
            <h1>{term.title}</h1>
            <section className="termsContainer">
              <PortableText
                value={term._rawContent}
                components={defaultComponents}
              />
            </section>
          </section>
        ))}
      </div>
    </TermStyles>
  );
}
