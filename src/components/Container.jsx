import React, { useState } from "react"
import Step from "./Step"
import steps from "../constants/steps"

export default function Container() {
  const [currStep, setCurrStep] = useState("step1")

  return (
    <>
      <Step currStep={currStep} />
    </>
  )
}
