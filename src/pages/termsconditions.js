import { defaultComponents, PortableText } from '@portabletext/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const TermStyles = styled.div`
  word-wrap: break-word;
  p {
    padding: 0.5rem 0;
  }
  .overlord {
    max-width: 900px;
    margin: 0 auto;
    background-color: #fff;
    padding: 2rem;
  }
  p:first-child {
    padding: 0;
    margin: 0;
  }
  .termsContainer {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .updateDate,
  h1 {
    text-align: center;
  }
  // change from 7rem for banner
  @media only screen and (max-width: 900px) {
    padding-top: 9rem;
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
