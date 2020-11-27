import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontXL};
    margin-bottom: 50px;
  }
  button {
    &:active,
    &:focus,
    &:focus:active {
      background-image: none;
      outline: 0;
      box-shadow: none;
    }
    background-color: inherit;
    cursor: pointer;
    text-decoration: line-through;
    font-size: 20px;
    margin-bottom: 30px;
    text-align: left;
    &:hover {
      text-decoration: none;
    }
    color: ${({ theme }) => theme.text};
    border: none;
  }
`

export default function PreviousChoices({
  previousChoices,
  handleNextStepSelection,
}) {
  return (
    <StyledWrapper>
      <h3>Your previous choices</h3>
      {previousChoices.length > 0 && (
        <>
          {previousChoices.map((prevChoice) => {
            return (
              <ol>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNextStepSelection(prevChoice.stepKey)}
                  >
                    {prevChoice.question}: {prevChoice.choice}
                  </button>
                </li>
              </ol>
            )
          })}
        </>
      )}
    </StyledWrapper>
  )
}

PreviousChoices.propTypes = {
  previousChoices: PropTypes.instanceOf(Array).isRequired,
  handleNextStepSelection: PropTypes.func.isRequired,
}
