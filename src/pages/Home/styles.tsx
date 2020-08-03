import styled from 'styled-components'

import backgroundImage from './../../assets/imgs/home-background.svg'

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

export const LoginContainer = styled.div`
  min-width: 35%;
  min-height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.colors.inputContainerColor};

  border-width: 1px;
  border-color: ${props => props.theme.colors.borderColor};
  border-style: solid;
  border-radius: 5px;

  @media (max-height: 370px) {
    min-height: 70vh;
  }

  @media (max-height: 550px) {
    max-height: 30vh;
  }

  @media (max-width: 340px) {
    min-width: 80%;
  }

  @media (max-width: 640px) {
    min-width: 60%;
  }
`

export const Title = styled.h2`
  font-size: 16px;

  margin-top: 10px;
  margin-bottom: 60px;

  color: ${props => props.theme.colors.fontColor};

  @media (max-height: 550px) {
    margin-bottom: 20px;
  }
`

export const CheckboxContainer = styled.div`
  height: 20px;

  margin-top: 20px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-height: 550px) {
    margin-top: 5px;
    margin-bottom: 10px;
  }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`

export const CheckboxMessage = styled.h3`
  font-size: 14px;
  margin-left: 5px;

  color: ${props => props.theme.colors.fontColor};
`

export const checkAdminButton = styled.button`
  margin-top: 25px;
  margin-bottom: 20px;

  padding-left: 5px;
  padding-right: 5px;

  background-color: transparent;

  border: none 0;
  
  opacity: 1;

  transition: 0.5s;

  @media (max-height: 550px) {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  :hover {
    cursor: pointer;
    border-left-style: solid;
    border-left-width: 2px;
    border-left-color: ${props => props.theme.colors.borderColor};

    border-right-style: solid;
    border-right-width: 2px;
    border-right-color: ${props => props.theme.colors.borderColor};

    opacity: 0.7;

    transition: 0.5s;
  }

  :active {
    opacity: 1;

    transition: 1s;
  }
`
