import styled from "styled-components"

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

export default StyledWrapper
