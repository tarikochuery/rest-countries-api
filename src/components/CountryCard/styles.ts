import styled from "styled-components"

const CardContainer = styled.div`
  width: 20%;
  height: 340px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.elements};

  margin-bottom: 20px;
  margin-right: 1px;

  font-size: 14px;
  color: ${props => props.theme.colors.text};

  border-radius: 5px;
  cursor: pointer
`

export default CardContainer