import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontXL};
    font-weight: 600;
  }
  p {
    margin: 10px 0 50px;
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
      <h3>Your choices</h3>
      <p>Here you can go back to previous questions</p>
      {previousChoices.length > 0 && (
        <>
          <ol>
            {previousChoices.map((prevChoice) => {
              return (
                <li key={prevChoice}>
                  <button
                    type="button"
                    onClick={() => handleNextStepSelection(prevChoice.stepKey)}
                  >
                    {prevChoice.question}: {prevChoice.choice}
                  </button>
                </li>
              )
            })}
          </ol>
        </>
      )}
    </StyledWrapper>
  )
}

PreviousChoices.propTypes = {
  previousChoices: PropTypes.instanceOf(Array).isRequired,
  handleNextStepSelection: PropTypes.func.isRequired,
}
