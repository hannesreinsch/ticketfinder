import React from "react"
import PropTypes from "prop-types"
import { Button } from "./elements"
import { db } from "../constants/db"

export default function Step({ step, handleNextStepSelection, theme }) {
  return (
    <>
      <p>{step.text}</p>
      {step.choices &&
        step.choices.map((choice) => {
          const correspondingStep = db[choice]
          return (
            <Button
              onClick={() => handleNextStepSelection(choice)}
              theme={theme}
            >
              {correspondingStep.buttonTextToStep}
            </Button>
          )
        })}
    </>
  )
}

Step.propTypes = {
  step: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  handleNextStepSelection: PropTypes.func.isRequired,
}
