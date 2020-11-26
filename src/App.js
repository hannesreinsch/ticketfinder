import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/globalStyles"
import Toggle from "./components/Toggle"
import { ninebarcTheme, darkTheme } from "./styles/theme"
import useDarkMode from "./hooks/useDarkMode"
import Container from "./components/Container"

function App() {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === "light" ? ninebarcTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <Container />
    </ThemeProvider>
  )
}

export default App
