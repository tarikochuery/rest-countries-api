import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  color: ${props => props.theme.colors.text};

  h2 {
    margin-bottom: 25px;
  }

  @media(max-width: 920px) {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const DataContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
  height: 130px;
  margin-bottom: 30px;

  @media(max-width: 920px) {
    height: fit-content;
    align-items: center;
  }

  p {
    margin-bottom: 10px;
    font-size: 12px;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%
    
  }
`