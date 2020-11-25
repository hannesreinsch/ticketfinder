import React, { useState } from "react"
import Step from "./Step"
import steps from "../constants/steps"

export default function Container() {
  const [currStep, setCurrStep] = useState("step1")

  function handleNextStepSelection(nextStep) {
    setCurrStep(nextStep)
  }

  return (
    <>
      <Step
        step={steps[currStep]}
        handleNextStepSelection={handleNextStepSelection}
      />
    </>
  )
}
