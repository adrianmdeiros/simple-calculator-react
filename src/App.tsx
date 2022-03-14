import React, { useState } from 'react'
import Header from './components/Header'
import Calculator from './components/Calculator'
import LIGHT from './styles/themes/light'
import DARK from './styles/themes/dark'
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components';
import usePersistedState from './hooks/usePersistedState'


export default function App() {
  const [theme, setTheme] = usePersistedState('theme', LIGHT)

  const toggleTheme = () => {
    setTheme(theme.TITLE === 'LIGHT' ? DARK : LIGHT)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Calculator />
    </ThemeProvider>
  )
}

