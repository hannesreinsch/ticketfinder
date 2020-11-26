import React from "react"
import PropTypes from "prop-types"
import { Button } from "./elements"

export default function PreviousChoices({
  previousChoices,
  handleNextStepSelection,
}) {
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
    </>
  )
}

PreviousChoices.propTypes = {
  previousChoices: PropTypes.instanceOf(Array).isRequired,
  handleNextStepSelection: PropTypes.func.isRequired,
}
