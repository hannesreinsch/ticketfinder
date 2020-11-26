import React from "react"
import { func, string } from "prop-types"
import { Button } from "./elements"

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme} theme={theme}>
      Switch Theme
    </Button>
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
export default Toggle
