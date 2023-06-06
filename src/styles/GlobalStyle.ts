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
    background: #fff;
    font-weight: 300;
  }
  body {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: ${({theme}) => theme.background};
    transition: background-color 0.2s ease-in-out;
  }
  h1, h2, h3, h4, h5 {
    font-weight: 300;
    line-height: 110%;
    /* or 110px */
    letter-spacing: -0.02rem;
    max-width: 42rem;
  }
  h1 {
    /** 64px */
    font-size: 4rem;
  }
  h2 {
    font-size: 3rem;
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
  

`

export default GlobalStyle
