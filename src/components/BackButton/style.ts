import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${props => props.theme.colors.elements};
  color: ${props => props.theme.colors.text};
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0 0 5px #000000;
  width: 120px;
  margin-bottom: 70px;
  cursor: pointer;
`