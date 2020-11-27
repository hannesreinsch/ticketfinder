import styled from "styled-components"

const Button = styled.button`
  &:active,
  &:focus,
  &:focus:active {
    background-image: none;
    outline: 0;
    box-shadow: none;
  }
  background: ${({ theme }) => theme.background};
  &:hover {
    background: ${({ theme }) => theme.backgroundHover};
    cursor: pointer;
  }
  color: ${({ theme }) => theme.backgroundText};
  padding: 20px 30px;
  border: none;
  font-size: ${({ theme }) => theme.fontNormal};
`

export default Button
