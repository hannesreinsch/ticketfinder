import React, { useState } from "react"
import Step from "../Step"
import PreviousChoices from "../PreviousChoices"
import { db, Q_NOTICKET } from "../../constants/db"
import StyledWrapper from "./StyledWrapper"

export default function Container() {
  const [currStep, setCurrStep] = useState(Q_NOTICKET)
  const [previousChoices, setPreviousChoices] = useState([])

  function handleNextStepSelection(nextStep) {
    // START
    // if a previous choice is clicked, remove every choice that has been made after it
    const indexOfNextStepInPreviousChoices = previousChoices.indexOf(
      previousChoices.find((choice) => choice.stepKey === nextStep)
    )
    const newPreviousChoices = previousChoices.slice(
      0,
      indexOfNextStepInPreviousChoices
    )

    if (indexOfNextStepInPreviousChoices !== -1) {
      setPreviousChoices(newPreviousChoices)
      // END
    } else {
      setPreviousChoices((oldState) => [
        ...oldState,
        {
          stepKey: currStep,
          question: db[currStep].text,
          choice: db[nextStep].buttonTextToStep,
        },
      ])
    }
    setCurrStep(nextStep)
  }

  return (
    <StyledWrapper>
      <div className="col-choice">
        <PreviousChoices
          previousChoices={previousChoices}
          handleNextStepSelection={handleNextStepSelection}
        />
      </div>
      <div className="col-step">
        <Step
          step={db[currStep]}
          handleNextStepSelection={handleNextStepSelection}
        />
      </div>
    </StyledWrapper>
  )
}
