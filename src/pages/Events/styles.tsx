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

export const FormContainer = styled.div`
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
