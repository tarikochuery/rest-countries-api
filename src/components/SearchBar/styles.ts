import styled from "styled-components";

const SearchBarStyle = styled.div`
  background-color: ${props => props.theme.colors.elements};
  width: 35%;
  padding: 15px 30px;

  border-radius: 5px;

  display: flex;
  align-items: center;
`

const Input = styled.input`
  background-color: ${props => props.theme.colors.elements};
  color: ${props => props.theme.colors.input};

  margin-left: 10px;
  border: none;
  outline: none;

  ::placeholder {
    color: ${props => props.theme.colors.input}
  }
`

export default SearchBarStyle
export { Input }