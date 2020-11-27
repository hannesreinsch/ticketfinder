import React from "react"
import { string } from "prop-types"
import styled from "styled-components"

const P = styled.p`
  font-size: ${({ theme }) => theme.fontXL};
  top: 20px;
  right: 50px;
  position: absolute;
`

const Name = ({ name }) => {
  return <P>Welcome Back, {name}</P>
}

Name.propTypes = {
  name: string.isRequired,
}
export default Name
