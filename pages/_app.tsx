import { AppProps } from "next/app"
import React from "react"
import { ThemeProvider } from "styled-components"

import PageHead from "components/PageHead"
import { GlobalStyle, theme } from "config/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageHead />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
