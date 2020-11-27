import React, { useState, useEffect } from "react"
import { func } from "prop-types"
import StyledWrapper from "./StyledWrapper"
import { Button, Input } from "../elements"

export default function Popup({ handleNameSubmit }) {
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

Popup.propTypes = {
  handleNameSubmit: func.isRequired,
}
