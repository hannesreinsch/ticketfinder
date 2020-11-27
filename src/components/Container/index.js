import React, { useState, useEffect } from "react"
import Step from "../Step"
import Popup from "../Popup"
import Name from "../Name"
import StyledWrapper from "./StyledWrapper"
import PreviousChoices from "../PreviousChoices"
import { db, Q_NOTICKET } from "../../constants/db"

export default function Container() {
  const [name, setName] = useState("")
  const [popupVisibility, setPopupVisibility] = useState(true)
  const [currStep, setCurrStep] = useState(Q_NOTICKET)
  const [previousChoices, setPreviousChoices] = useState([])

  // check if name has been entered before to not ask multiple times
  useEffect(() => {
    const storedName = window.localStorage.getItem("name")
    if (storedName) {
      setName(storedName)
      setPopupVisibility(false)
    }
  }, [])

  function handleNameSubmit(value) {
    window.localStorage.setItem("name", value)
    setPopupVisibility((oldPopupVisibility) => !oldPopupVisibility)
    setName(value)
  }

  function handleNextStepSelection(nextStep) {
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
      // otherwise, add choice to previous choices
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
      {popupVisibility && <Popup handleNameSubmit={handleNameSubmit} />}
      {name && <Name name={name} />}
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
