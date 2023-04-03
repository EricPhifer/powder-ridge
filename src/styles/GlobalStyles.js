import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* CSS Reset by Mirkov Sasa https://github.com/mirkovsasa/CSS-Reset/blob/main/Reset.css */

/* Resetting defaults */
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
}

/* Setting border box model for easier sizing of elements */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Setting font size to make 10px = 1rem for easier scaling and manipulation of all elements in rem's */
html {
    font-size: 62.5%;
}

/* Setting default distance between the lines */
body {
    line-height: 1;
}

/* inheriting text for consistency */
input, button, textarea, select {
  font: inherit;
}

/* Removing default styles for lists */    
ol, ul {
    list-style: none;
}

/* Removing defaults styles for quotes */    
blockquote, q {
    quotes: none;
}
    
blockquote:before, blockquote:after,
    q:before, q:after {
    content: '';
    content: none;
}
    
/* Removing default outline styles for elements */
:focus {
    outline: 0;
}
    
/* Removing table defaults */
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* Changing default img properties for easier workflow */
img, picture {
    max-width: 100%;
    display: block;
}
/* end default reset */

:root {
    --red: #FF4949;
    --gray: #e4e4e4;
    --black: #2E2E2E;
    --green: #016B37;
    --white: #EDF4ED;
    --brown: #51291E;
    --lightgreen: #ABD1B5;
  }
  html {
    background-image: eggshell;
    background-size: 100%;
    background-attachment: fixed;
    font-size: 10px;
    overflow-x: hidden;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    display: flex;
    max-width: 800px;
    width: 100%;
    margin: 1.5rem auto;
    padding: 2rem 0;
    justify-content: center;
    box-shadow: 3px 3px 10px black;
    background: darkcyan;
    color: white;
    border: 0;
    border-radius: 40px;
    cursor: pointer;
    --cast: 2px;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.05s;
    a {
      text-decoration: none;
      color: white;
    }
    &:hover {
      border: 0.2rem solid #fff;s
    }
  }
  .userWelcome {
    padding: 2rem;
  }
  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } */

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export default GlobalStyles;
