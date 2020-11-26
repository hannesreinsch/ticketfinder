import React from "react"
import PropTypes from "prop-types"
import { Button } from "./elements"
import { db } from "../constants/db"

export default function Step({ step, handleNextStepSelection }) {
  return (
    <>
      <p>{step.text}</p>
      {step.choices &&
        step.choices.map((choice) => {
          const correspondingStep = db[choice]
          return (
            <Button onClick={() => handleNextStepSelection(choice)}>
              {correspondingStep.buttonTextToStep}
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
