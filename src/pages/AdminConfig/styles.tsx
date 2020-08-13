import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'

import backgroundImage from './../../assets/imgs/admin-background.svg'

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
// container styles
export const ContentContainer = styled.div`
  min-height: 80%;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PainelContainer = styled.div`
  min-width: 70%;
  max-height: 50vh;

  padding-bottom: 20px;

  background-color: ${props => props.theme.colors.inputContainerColor};

  /* provisorio */
  border-width: 1px;
  border-color: ${props => props.theme.colors.borderColor};
  border-style: solid;
  border-radius: 5px;
`

// title styles
export const Title = styled.h3`
  font-size: 14px;

  color: ${props => props.theme.colors.fontColor};
  
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`

// form styles
export const FieldsContainer = styled.div`
  width: 100%;
  height: 25px;

  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
`

export const InputsContainer = styled.div`
  width: 100%;
`

export const Input = styled.input`
  width: 35%;
  height: 25px;

  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;

  padding-left: 5px;

  border: 0 none;

  background-color: ${props => props.theme.colors.inputBackgroundColor};

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

export const Button = styled.button`
  height: 30px;
  width: 50px;

  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color: ${props => props.theme.colors.buttonColor};

  border: none 0;
  border-radius: 5px;

  transition: 0.5s;

  :hover {
    opacity: 0.8;
    transition: 0.5s;
  }

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

export const ButtonIcon = styled(FaArrowRight)`
  font-size: 10px;
`