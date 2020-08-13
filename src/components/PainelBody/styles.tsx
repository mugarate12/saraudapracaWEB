import styled from 'styled-components'
import { FaAddressCard, FaCalendar, FaEnvelope, FaPaintBrush, FaWhatsapp, FaInstagram, FaArrowRight } from 'react-icons/fa'

const iconSize = 14

// checkbox styles
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

// titles styles
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
  font-size: ${iconSize}px;

  color: ${props => props.theme.colors.iconsColor};
`

export const ItemDateIcon = styled(FaCalendar)`
  font-size: ${iconSize - 2}px;

  color: ${props => props.theme.colors.iconsColor};
`

export const ItemEmailIcon = styled(FaEnvelope)`
  font-size: ${iconSize}px;

  color: ${props => props.theme.colors.iconsColor};
`

export const ItemActivityIcon = styled(FaPaintBrush)`
  font-size: ${iconSize}px;

  color: ${props => props.theme.colors.iconsColor};
`

export const ItemWhatsappIcon = styled(FaWhatsapp)`
  font-size: ${iconSize}px;

  color: ${props => props.theme.colors.iconsColor};
`

export const ItemInstagramIcon = styled(FaInstagram)`
  font-size: ${iconSize}px;

  color: ${props => props.theme.colors.iconsColor};
`

// content styles
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-left: 5px;
`

export const ItemContainerParticipant = styled.div`
  border: none 0;
  background-color: transparent;
  
  height: 20px;
  width: 90%;

  display: flex;
  flex-direction: row;
`

export const ParticipantItem = styled.div`
  width: 18%;

  display: flex;
  flex-direction: row;

  background-color: transparent;

  border-width: 2px;
  border-color: ${props => props.theme.colors.borderColor};
  border-style: solid;
`

export const HourInputParticipant = styled.input.attrs({ type: 'time' })`
  width: 48%;

  padding-left: 5px;

  background-color: ${props => props.theme.colors.inputBackgroundColor};

  border-style: none;
  
  border-style: solid;
  border-width: 2px;
  border-color: ${props => props.theme.colors.borderColor};

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

// button style
export const Button = styled.button`
  height: 25px;
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  align-self: flex-end;

  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 5%;

  cursor: pointer;

  background-color: ${props => props.theme.colors.buttonColor};

  border: none 0;
  border-radius: 5px;

  :hover {
    opacity: 0.8;
    transition: 0.5s;
  }

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

export const IconButton = styled(FaArrowRight)`
  font-size: 12px;

  color: ${props => props.theme.colors.iconsColor};
`