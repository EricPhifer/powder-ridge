import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import { PortableText, defaultComponents } from '@portabletext/react';
import useForm from '../utils/useForm';

const HeroStyles = styled.div`
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

const MemberStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 2rem;
  text-shadow: -1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff,
    -1px -1px 0 #fff;
  @media only screen and (max-width: 700px) {
    flex-flow: column nowrap;
  }
  .image {
    align-self: center;
    text-align: center;
  }
  img {
    border: 3rem grey groove;
    max-width: 800px;
    width: 0 auto;
    width: 50%;
    @media only screen and (max-width: 700px) {
      width: 30%;
    }
    @media only screen and (max-width: 500px) {
      width: 50%;
    }
    @media only screen and (max-width: 400px) {
      width: 73%;
    }
  }
  #-97c20eb2-5ca4-53e1-811a-c52a7ea1a30d {
    height: auto;
  }
  .card {
    align-self: center;
    width: 100%;
  }
  .position {
    padding-top: 0;
    padding-bottom: 1rem;
    font-size: 1.6rem;
  }
  .description {
    text-align: justify;
  }
  .content {
    position: relative;
    line-height: 1.3;
  }
  .memberName {
    padding-bottom: 0;
    font-weight: bold;
    font-size: 2.2rem;
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
    ul {
      margin-left: -15%;
    }
    button {
      margin: 0.5rem;
      width: 100%;
    }
  }
  /* Hiding call button on non-mobile devices */
  .call {
    display: none;
  }
  @media (pointer: coarse) {
    .call {
      display: inline;
    }
  }
`;

const CommitteeStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 2rem;
  div {
    max-width: 800px;
    margin: 0 auto;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    line-height: 1.43;
    strong {
      padding: 0.2rem;
      font-size: 2.3rem;
    }
  }
  img {
    box-shadow: 3px 3px 10px black;
  }
  button {
    text-align: center;
    a {
      text-decoration: none;
      color: white;
    }
    &:hover {
      box-shadow: 5px 5px 10px black;
    }
    &:active {
      border: 0.2rem solid magenta;
      color: magenta;
    }
  }
  @media (max-width: 400px) {
    margin: 0;
    h2 {
      font-size: 1.75rem;
    }
    button {
      font-size: 1.5rem;
      width: 100%;
    }
    div {
      font-size: 1.75rem;
    }
    div strong {
      font-size: 1.75rem;
    }
  }
  /* Hiding call button on non-mobile devices */
  .call {
    display: none;
  }
  @media (pointer: coarse) {
    .call {
      display: block;
    }
  }
`;

const CommitteesStyles = styled.div``;

const FormStyles = styled.div`
  max-width: 1200px;
  margin: 5rem auto;
  display: flex;
  form {
    padding: 2rem;
  }
  legend {
    font-size: 3rem;
    padding-bottom: 2rem;
    font-variant: small-caps;
  }
  label {
    font-size: 1.75rem;
  }
  input,
  textarea {
    width: 99%;
    border: 1px solid black;
  }
  input,
  textarea,
  select {
    margin: 10px 0;
    padding: 10px 0 10px 10px;
  }
  .hide {
    display: none;
  }
  select,
  button {
    width: 99%;
    border: 1px solid black;
  }
  select {
    color: #7c7c7c;
  }
  .submitButton {
    max-width: 800px;
    margin-top: 1.5rem auto;
    font-size: 2.5rem;
  }
  @media (max-width: 400px) {
    input,
    textarea {
      width: 95%;
    }
    fieldset {
      margin: 0;
      padding: 5px;
    }
    button {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;

export default function BoardMembers() {
  const { members, committees, hero } = useStaticQuery(graphql`
    query {
      hero: allSanityBoardhero {
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
      members: allSanityBoardMembers {
        nodes {
          name
          _rawDescription
          email
          id
          phone
          position
          image {
            asset {
              _id
            }
            ...ImageWithPreview
          }
        }
      }
      committees: allSanityCommittees {
        nodes {
          id
          email
          _rawDescription
          chairman
          name
          phone
          image {
            asset {
              _id
            }
            ...ImageWithPreview
          }
          members
        }
      }
    }
  `);

  const mnodes = members.nodes;
  const cnodes = committees.nodes;
  const heroes = hero.nodes;

  const { values, updateValue } = useForm({
    formName: '',
    name: '',
    email: '',
  });

  function changeFormName(event) {
    const name = `Contact-for-${event.target.value}`;
    const e = {
      target: {
        name: 'formName',
        value: name,
      },
    };
    updateValue(e);
  }

  return (
    <>
      {heroes.map((hiro) => (
        <HeroStyles key={hiro.id}>
          <Hero>
            <SanityImage
              {...hiro.image}
              alt="Powder Ridge Skiing"
              style={{
                objectFit: 'cover',
                auto: 'format',
              }}
            />
            <Overlay>
              <H1>{hiro.heromsg}</H1>
            </Overlay>
          </Hero>
        </HeroStyles>
      ))}
      {mnodes.map((member) => (
        <MemberStyles key={member.id}>
          {member.image ? (
            <div className="image" id={member.id}>
              <SanityImage
                {...member.image}
                alt={member.name}
                style={{
                  objectFit: 'cover',
                  auto: 'format',
                }}
              />
            </div>
          ) : (
            <div className="noImage" />
          )}
          <div className="card">
            <div className="memberName">{member.name}</div>
            <div className="position">{member.position}</div>
            <div className="description">
              <PortableText
                value={member._rawDescription}
                components={defaultComponents}
              />
            </div>{' '}
          </div>
        </MemberStyles>
      ))}
      <button type="button" className="memberbtn">
        <a href="#formContainer">Send a Message to the Board</a>
      </button>
      <CommitteesStyles>
        {cnodes.map((committee) => (
          <CommitteeStyles>
            <div className="committeeContainer" key={committee.id}>
              <h2>{committee.name}</h2>
              <div className="committeeImage">
                <SanityImage
                  {...committee.image}
                  alt={committee.name}
                  style={{
                    width: '100%',
                    height: '40vh',
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </div>
              <PortableText
                value={committee._rawDescription}
                components={defaultComponents}
              />
              <div className="contact">
                <div className="container">
                  <button
                    type="button"
                    name={committee.name}
                    id={committee.id}
                    className="committeebtn call"
                  >
                    <a href={`tel:${committee.phone}`}>
                      or Call {committee.name}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </CommitteeStyles>
        ))}
      </CommitteesStyles>
      <FormStyles>
        <form
          name={values.formName ? values.formName : 'Contact-for-President'}
          method="POST"
          data-netlify="true"
          className="container"
          id="formContainer"
          // eslint-disable-next-line
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="subject" value="Contact from Website" />
          <input
            type="hidden"
            name="form-name"
            value={values.formName ? values.formName : 'Contact-for-President'}
          />
          <fieldset>
            <legend>Contact Us</legend>
            <label htmlFor="name" className="nameLabel">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={updateValue}
              placeholder="Your Name"
            />
            <label htmlFor="email" className="emailLabel">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={updateValue}
              placeholder="Your Email"
            />
            <label htmlFor="subject" className="subjectLabel">
              Subject
            </label>
            <input
              type="subject"
              name="subject"
              id="subject"
              value={values.subject}
              onChange={updateValue}
              placeholder="Reason for contacting?"
            />
            <label htmlFor="contacting" className="contactingLabel">
              Who are you contacting?
            </label>
            <select
              name="contacting"
              id="contacting"
              onChange={changeFormName}
              required
            >
              <option value="President">President</option>
              <option value="Secretary">Secretary</option>
              <option value="VicePresident">Vice President</option>
              <option value="Treasurer">Treasurer</option>
              <option value="Chair">Committee Chairman</option>
            </select>
            <label htmlFor="message" className="messageLabel">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={values.message}
              onChange={updateValue}
              rows="7"
              placeholder="What question or message do you have?"
            />
            <button type="submit" className="submitButton" value="Submit">
              Submit
            </button>
          </fieldset>
        </form>
      </FormStyles>
    </>
  );
}
