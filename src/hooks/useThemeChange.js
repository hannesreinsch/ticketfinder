import { useEffect, useState } from "react"
import { THEME_DARK, THEME_NINEBARC } from "../styles/theme"

const useThemeChange = () => {
  const [theme, setTheme] = useState(THEME_NINEBARC)

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    if (theme === THEME_NINEBARC) {
      setMode(THEME_DARK)
    } else {
      setMode(THEME_NINEBARC)
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    if (localTheme) setTheme(localTheme)
  }, [])
  return [theme, themeToggler]
}

export default useThemeChange
