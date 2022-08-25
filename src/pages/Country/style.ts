import styled from "styled-components"

export const CountryContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  padding: 70px;

  div {

  }
`

export const ImgContainer = styled.div`
  width: 38%;
  min-width: 300px;
  margin-right: 80px;
  margin-bottom: 20px;

  @media(max-width: 920px) {
    width: 100%;
    margin-right: 0px
  }
`