import styled from "styled-components"

const Input = styled.input`
  &:active,
  &:focus,
  &:focus:active {
    background-image: none;
    outline: 0;
    box-shadow: none;
  }
  padding: 20px 30px;
  border: none;
  border-bottom: 2px solid black;
  font-size: ${({ theme }) => theme.fontNormal};
`

export default Input
