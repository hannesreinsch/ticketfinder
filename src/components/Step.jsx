import React from "react"
import PropTypes from "prop-types"
import { Button } from "./elements"
import steps from "../constants/steps"

export default function Step({ step, handleNextStepSelection }) {
  const { question, choices } = step
  return (
    <>
      <p>{question}</p>
      {step.choices.map((choice) => {
        const correspondingStep = steps[choice]
        return (
          <Button onClick={() => handleNextStepSelection(choice)}>
            {correspondingStep.buttonContent}
          </Button>
        )
      })}
    </>
  )
}

Step.propTypes = {
  step: PropTypes.string.isRequired,
  handleNextStepSelection: PropTypes.func.isRequired,
}
