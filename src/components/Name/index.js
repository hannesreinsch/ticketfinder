import React from "react"
import { string } from "prop-types"

const Name = ({ name }) => {
  return <p>Welcome Back {name}</p>
}

Name.propTypes = {
  name: string.isRequired,
}
export default Name
