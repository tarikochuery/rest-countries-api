import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 10px 20px;
  width: 100%;
  height: 50px;

  background-color: ${props => props.theme.colors.elements};

  color: ${props => props.theme.colors.text};
`

export default HeaderContainer