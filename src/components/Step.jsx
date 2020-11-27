import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Button } from "./elements"
import { db } from "../constants/db"

const StyledWrapper = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontXXL};
    font-weight: 900;
  }
  .btn-row {
    display: flex;
    margin-top: 30px;
    button {
      margin-right: 25px;
    }
  }
`
export default function Step({ step, handleNextStepSelection }) {
  return (
    <StyledWrapper>
      <h1>{step.text}</h1>
      <div className="btn-row">
        {step.choices &&
          step.choices.map((choice) => {
            const correspondingStep = db[choice]
            return (
              <Button
                onClick={() => handleNextStepSelection(choice)}
                key={choice}
              >
                {correspondingStep.buttonTextToStep}
              </Button>
            )
          })}
      </div>
    </StyledWrapper>
  )
}

Step.propTypes = {
  step: PropTypes.instanceOf(Object).isRequired,
  handleNextStepSelection: PropTypes.func.isRequired,
}
