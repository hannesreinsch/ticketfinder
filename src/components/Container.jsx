import React, { useState } from "react"
import Step from "./Step"
import { Button } from "./elements"
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
      {previousChoices.length > 0 && (
        <>
          <p>Your previous choices</p>
          {previousChoices.map((prevChoice) => {
            return (
              <ol>
                <li>
                  <Button
                    onClick={() => handleNextStepSelection(prevChoice.stepKey)}
                  >
                    {prevChoice.question} : {prevChoice.choice}
                  </Button>
                </li>
              </ol>
            )
          })}
        </>
      )}
      <Step
        step={db[currStep]}
        handleNextStepSelection={handleNextStepSelection}
      />
    </>
  )
}
