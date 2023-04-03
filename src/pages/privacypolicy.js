import { defaultComponents, PortableText } from '@portabletext/react';
import { graphql } from 'gatsby';
/* eslint-disable-next-line */
import React from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';

const PolicyStyles = styled.div`
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
    @media only screen and (max-width: 900px) {
        padding-top: 7rem;
    }
`;

export default function PrivacyPolicy({ data }) {
    const policies = data.policies.nodes;
    return (
        <>
            <Seo title="Privacy Policy" />
            <PolicyStyles>
                <div className="overlord">
                    <p className="updateDate">Last updated: May 17, 2022</p>
                    {policies.map((policy) => (
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
        </>
    );
}

export const query = graphql`
    query {
        policies: allSanityPrivacyPolicy {
            nodes {
                id
                title
                _rawContent
            }
        }
    }
`;
