import React from "react"
import { func } from "prop-types"
import { Button } from "./elements"

const Toggle = ({ toggleTheme }) => {
  return <Button onClick={toggleTheme}>Toggle Theme</Button>
}

Toggle.propTypes = {
  toggleTheme: func.isRequired,
}
export default Toggle
