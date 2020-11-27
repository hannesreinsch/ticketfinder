import React from "react"
import PropTypes from "prop-types"
import StyledWrapper from "./StyledWrapper"

export default function PreviousChoices({
  previousChoices,
  handleNextStepSelection,
}) {
  return (
    <StyledWrapper>
      <h3>Your choices</h3>
      <p>Here you can go back to previous questions</p>
      {previousChoices.length > 0 && (
        <ol>
          {previousChoices.map((prevChoice) => {
            return (
              <li key={prevChoice.stepKey}>
                <button
                  type="button"
                  onClick={() => handleNextStepSelection(prevChoice.stepKey)}
                >
                  {prevChoice.question}: {prevChoice.choice}
                </button>
              </li>
            )
          })}
        </ol>
      )}
    </StyledWrapper>
  )
}

PreviousChoices.propTypes = {
  previousChoices: PropTypes.instanceOf(Array).isRequired,
  handleNextStepSelection: PropTypes.func.isRequired,
}
