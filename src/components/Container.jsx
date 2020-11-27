import React, { useState } from "react"
import styled from "styled-components"
import Step from "./Step"
import PreviousChoices from "./PreviousChoices"
import { db, Q_NOTICKET } from "../constants/db"

const StyledWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: none;
  display: flex;
  flex-direction: row;
  height: 100%;
  .col-choice {
    padding: 100px 50px;
    width: 30%;
    border-right: 1px solid black;
    background-color: ${({ theme }) => theme.backgroundLight};
  }
  .col-step {
    padding: 100px 50px;
    width: 70%;
  }
`

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
