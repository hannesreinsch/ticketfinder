import React, { useState, useEffect } from "react"
import { func } from "prop-types"
import styled from "styled-components"
import { Button, Input } from "./elements"

const StyledWrapper = styled.div`
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;
  .modal-content {
    display: flex;
    flex-direction: column;
    background-color: white;
    position: absolute;
    top: 20%;
    left: 30%;
    width: 40%;
    border: 2px solid black;
    h3 {
      font-size: ${({ theme }) => theme.fontXL};
      text-align: center;
      margin-top: 30px;
    }
    input {
      margin: 30px 25px;
    }
    .enter {
      width: 50%;
      margin: 0 auto;
      margin-bottom: 30px;
    }
  }
`

export default function PopUp({ handleNameSubmit }) {
  const [name, setName] = useState("")

  useEffect(() => {
    const storedName = window.localStorage.getItem("name")
    if (storedName) {
      setName(storedName)
    }
  }, [])

  return (
    <StyledWrapper>
      <div className="modal">
        <div className="modal-content">
          <h3>Enter your Name</h3>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button className="enter" onClick={() => handleNameSubmit(name)}>
            Enter
          </Button>
        </div>
      </div>
    </StyledWrapper>
  )
}

PopUp.propTypes = {
  handleNameSubmit: func.isRequired,
}
