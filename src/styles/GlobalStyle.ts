// globalStyles.js
'use client'

import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: ${({theme}) => theme.text};
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${({theme}) => theme.background};
    font-weight: 300;
    transition: background-color 0.2s ease-in-out;
  }
  body {
    max-width: 1680px;
    margin: 0 auto;
    min-height: 100vh;
    overflow-x: hidden;
    padding: ${({theme}) => theme.spacing.slarge + ' ' + theme.spacing.xlarge};
  }
  h1, h2, h3, h4, h5 {
    font-weight: 300;
    line-height: 110%;
    /* or 110px */
    letter-spacing: -0.02rem;
    max-width: 48rem;

  }
  h1 {
    /** 96px */
    font-size: 6rem;
    margin-bottom: 4rem;
  }
  h2 {
    font-size: 5rem;
  }
  h3 {
    font-weight: 500;
    font-size: 2rem;
  }
  h4 {
    font-weight: 500;
    font-size: 1.5rem;
  }
  h5 {
    font-weight: 700;
    font-size: 1rem;
  }
  p, caption, a {  
    line-height: 125%;
    white-space: pre-wrap;
  }
  p {
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: -0.01rem;
  }
  caption {
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.02rem;
  }
  a {
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }

  img {
    max-width: 100%;
  }
  

`

export default GlobalStyle
