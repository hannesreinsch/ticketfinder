import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/globalStyles"
import Toggle from "./components/Toggle"
import { ninebarcTheme, darkTheme } from "./styles/theme"
import useThemeChange from "./hooks/useThemeChange"
import Container from "./components/Container"

function App() {
  const [theme, themeToggler] = useThemeChange()
  const themeMode = theme === "ninebarcTheme" ? ninebarcTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Toggle toggleTheme={themeToggler} />
      <Container />
    </ThemeProvider>
  )
}

export default App
