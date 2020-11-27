import React from "react"
import PropTypes from "prop-types"
import { Button } from "../elements"
import { db } from "../../constants/db"
import StyledWrapper from "./StyledWrapper"

export default function Step({ step, handleNextStepSelection }) {
  return (
    <StyledWrapper>
      <h1>{step.text}</h1>
      <div className="btn-row">
        {step.choices.map((choice) => {
          const correspondingStep = db[choice]
          return (
            <Button
              onClick={() => handleNextStepSelection(choice)}
              key={choice}
            >
              {correspondingStep.buttonTextToStep}
            </Button>
          )
        })}
      </div>
    </StyledWrapper>
  )
}

Step.propTypes = {
  step: PropTypes.instanceOf(Object).isRequired,
  handleNextStepSelection: PropTypes.func.isRequired,
}
