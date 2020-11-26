import React, { useState } from "react"
import Step from "./Step"
import PreviousChoices from "./PreviousChoices"
import { db, Q_NOTICKET } from "../constants/db"

export default function Container() {
  const [currStep, setCurrStep] = useState(Q_NOTICKET)
  const [previousChoices, setPreviousChoices] = useState([])

  function handleNextStepSelection(nextStep) {
    if (nextStep === Q_NOTICKET) {
      setPreviousChoices([])
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
    <>
      <PreviousChoices
        previousChoices={previousChoices}
        handleNextStepSelection={handleNextStepSelection}
      />
      <Step
        step={db[currStep]}
        handleNextStepSelection={handleNextStepSelection}
      />
    </>
  )
}
