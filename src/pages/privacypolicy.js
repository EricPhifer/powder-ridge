import { defaultComponents, PortableText } from '@portabletext/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PolicyStyles = styled.div`
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
  h1 {
    text-align: center;
  }
  .policyContainer {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .updateDate {
    text-align: center;
  }
  // change from 7rem for banner
  @media only screen and (max-width: 900px) {
    padding-top: 9rem;
  }
`;

export default function PrivacyPolicy() {
  const { policies } = useStaticQuery(graphql`
    query {
      policies: allSanityPrivacypolicy {
        nodes {
          id
          title
          _rawContent
        }
      }
    }
  `);
  const { nodes } = policies;
  return (
    <PolicyStyles>
      <div className="overlord">
        {nodes.map((policy) => (
          <section key={policy.id}>
            <h1>{policy.title}</h1>
            <section className="policyContainer">
              <PortableText
                value={policy._rawContent}
                components={defaultComponents}
                className="answer flex"
              />
            </section>
          </section>
        ))}
      </div>
    </PolicyStyles>
  );
}
