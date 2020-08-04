import styled from 'styled-components'

import backgroundImage from './../../assets/imgs/event-background.svg'

export const Container = styled.div`
  height: 100vh;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;
  background-size: cover;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`

export const ContentContainer = styled.div`
  min-height: 80%;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CheckboxContainer = styled.div`
  height: 20px;

  width: 100%;
  background-color: transparent;

  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;

  margin-left: 10px;
`

export const CheckBoxMessage = styled.h3`
  font-size: 14px;
  margin-left: 5px;

  color: ${props => props.theme.colors.fontColor};
`
