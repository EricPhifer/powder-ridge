import { defaultComponents, PortableText } from '@portabletext/react';
import { graphql } from 'gatsby';
/* eslint-disable-next-line */
import React from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';

const TermStyles = styled.div`
    word-wrap: break-word;
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
    @media only screen and (max-width: 900px) {
        padding-top: 7rem;
    }
`;

export default function TermsConditions({ data }) {
    const terms = data.terms.nodes;
    return (
        <>
            <Seo title="Terms &amp; Conditions" />
            <TermStyles>
                <div className="overlord">
                    <p className="updateDate">Last updated: May 17, 2022</p>
                    {terms.map((term) => (
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
        </>
    );
}

export const query = graphql`
    query {
        terms: allSanityTermsConditions {
            nodes {
                id
                title
                _rawContent
            }
        }
    }
`;
