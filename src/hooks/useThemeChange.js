import { useEffect, useState } from "react"

const useThemeChange = () => {
  const [theme, setTheme] = useState("ninebarcTheme")

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    if (theme === "ninebarcTheme") {
      setMode("dark")
    } else {
      setMode("ninebarcTheme")
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    if (localTheme) setTheme(localTheme)
  }, [])
  return [theme, themeToggler]
}

export default useThemeChange
