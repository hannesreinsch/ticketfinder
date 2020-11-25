import React from "react"
import PropTypes from "prop-types"

export default function Step({ currStep }) {
  return (
    <>
      <p>{currStep}</p>
    </>
  )
}

Step.propTypes = {
  currStep: PropTypes.string.isRequired,
}
