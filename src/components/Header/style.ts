import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 10px 50px;
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.colors.elements};

  color: ${props => props.theme.colors.text};
`

export default HeaderContainer