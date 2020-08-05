import styled from 'styled-components'
import { FaAddressCard, FaCalendar } from 'react-icons/fa'

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

  margin-left: 30px;
`

export const CheckBoxMessage = styled.h3`
  font-size: 14px;
  margin-left: 5px;

  color: ${props => props.theme.colors.fontColor};
`

export const ItensTitleContainer = styled.div`
  height: 20px;
  width: 90%;

  margin-bottom: 5px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  background-color: transparent;
`

export const TitleContainer = styled.div`
  width: 50%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const ItemTitle = styled.h3`
  font-size: 14px;
  margin-right: 10px;

  color: ${props => props.theme.colors.fontColor};
`

export const ItemNameIcon = styled(FaAddressCard)`
  font-size: 14px;
`

export const ItemDateIcon = styled(FaCalendar)`
  font-size: 14px;
`
export const ItemContainer = styled.button`
  border: none 0;
  background-color: transparent;
  
  height: 20px;
  width: 90%;

  display: flex;
  flex-direction: row;

  cursor: pointer;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  :hover {
    opacity: 0.5;
  }
`

export const Item = styled.div`
  width: 48%;

  display: flex;
  flex-direction: row;

  background-color: transparent;

  border-width: 2px;
  border-color: ${props => props.theme.colors.borderColor};
  border-style: solid;
`

export const ItemContent = styled.p`
  font-size: 14px;

  margin-left: 5px;
`
export const ItemButtonContainer = styled.button`
  border: none 0;
  background-color: transparent;

  cursor: pointer;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  :hover {
    opacity: 0.5;
  }
`
