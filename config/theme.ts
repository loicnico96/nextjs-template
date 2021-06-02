import { createGlobalStyle } from "styled-components"

export type Theme = {
  // TODO
}

export const theme: Theme = {
  // TODO
}

export const fonts: string[] = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans-serif",
]

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
    font-family: ${fonts};
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
