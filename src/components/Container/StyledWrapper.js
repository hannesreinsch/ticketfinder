import styled from "styled-components"

const StyledWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: none;
  display: flex;
  flex-direction: row;
  height: 100%;
  .col-choice {
    padding: 100px 50px;
    width: 30%;
    border-right: 1px solid black;
    background-color: ${({ theme }) => theme.backgroundLight};
  }
  .col-step {
    padding: 100px 50px;
    width: 70%;
  }
`

export default StyledWrapper
