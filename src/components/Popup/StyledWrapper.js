import styled from "styled-components"

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

export default StyledWrapper
