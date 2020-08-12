import styled from 'styled-components'
import { IoIosColorPalette } from 'react-icons/io'
import { FaUsers, FaArrowLeft } from 'react-icons/fa'

const iconSize = '16px'

export const Container = styled.div`
  min-width: 70%;
  /* min-height: 200px; */
  max-height: 50vh;

  padding-bottom: 20px;

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

export const CardBody = styled.div`
  width: 100%;
  /* min-height: 200px; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;


  background-color: ${props => props.theme.colors.inputContainerColor};
  
`

export const EventIcon = styled(IoIosColorPalette)`
  font-size: ${iconSize};

  padding-left: 10px;
`

export const ParticipantsIcon = styled(FaUsers)`
  font-size: ${iconSize};

  padding-left: 10px;
`

export const BackIcon = styled(FaArrowLeft)`
  font-size: 13px;

  padding-left: 10px;
`

export const BackButtonContainer = styled.button`
  border: 0 none;
  background-color: transparent;

  width: none;
  height: none;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  :hover {
    opacity: 0.5;
  }
`
