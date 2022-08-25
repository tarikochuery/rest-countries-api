import styled from "styled-components";

export const BorderButtonStyle = styled.button`
  color: ${props => props.theme.colors.text};
  padding: 8px 20px;
  background-color: ${props => props.theme.colors.elements};
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px #000;
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  cursor: pointer;
`