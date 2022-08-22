import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body, input, button {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600
  }
`

export default GlobalStyle
