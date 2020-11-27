import styled from "styled-components"

const StyledWrapper = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontXXL};
    font-weight: 900;
  }
  .btn-row {
    display: flex;
    margin-top: 30px;
    button {
      margin-right: 25px;
    }
  }
`

export default StyledWrapper
