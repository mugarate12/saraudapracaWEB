import styled from 'styled-components'

export const Container = styled.div`
  min-width: 70%;
  height: 200px;

  background-color: ${props => props.theme.colors.inputContainerColor};

  /* provisorio */
  border-width: 1px;
  border-color: ${props => props.theme.colors.borderColor};
  border-style: solid;
  border-radius: 5px;
`

export const CardHeader = styled.header`
  height: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;

  /* background-color: red; */
`

export const CardTitle = styled.h3`
  font-size: 14px;
  color: ${props => props.theme.colors.fontColor};

  margin-left: 10px;
`

export const CardHeaderLine = styled.div`
  height: 2px;
  width: 90%;

  margin-left: 10px;

  border-radius: 10px;

  background-color: yellow;
`
