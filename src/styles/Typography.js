import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri',
    'Trebuchet MS', sans-serif;
    color: #000;
  }

  body {
    font-size: 1.5rem;
    color: var(--black);
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: var(--blue);
    &:hover {
      color: var(--lightblue);
    }
  }
`;

export default Typography;
