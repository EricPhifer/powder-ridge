import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { PortableText, defaultComponents } from '@portabletext/react';
import { ItemStyles } from '../styles/PageCardStyles';

const FAQGridStyles = styled.div``;

export default function FaqItemGrid() {
  const { faqs } = useStaticQuery(graphql`
    query {
      faqs: allSanityFaq {
        nodes {
          id
          question
          _rawAnswer
        }
      }
    }
  `);
  const allFaqs = faqs.nodes;
  return (
    <FAQGridStyles>
      <ItemStyles>
        {allFaqs.map((faq) => (
          <div className="card" key={faq.id}>
            <div className="title">{faq.question}</div>
            <div className="content">
              <PortableText
                value={faq._rawAnswer}
                components={defaultComponents}
              />
            </div>{' '}
          </div>
        ))}
      </ItemStyles>
    </FAQGridStyles>
  );
}
