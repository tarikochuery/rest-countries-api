import styled from "styled-components";

const Select = styled.select`
  background-color: ${props => props.theme.colors.elements};
  color: ${props => props.theme.colors.text};
  padding: 15px 30px;
  border-radius: 5px;
  border: none;

  width: 15%;

  cursor: pointer;
`



export default Select