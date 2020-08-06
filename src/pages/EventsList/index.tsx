import React, { useState } from 'react'
import { IoIosColorPalette } from 'react-icons/io'
import { FaUsers } from 'react-icons/fa'

import Header from './../../components/Header/index'
import Painel from './../../components/Painel/index'

import * as Styled from './styles'

export default function EventList() {
  const [checkboxState, setCheckboxState] = useState<boolean>(false)
  const [showEventPainel, setShowEventPainel] = useState<boolean>(true)
  const [showParticipantsPainel, setShowParticipantsPainel] = useState<boolean>(false)

  function eventsPainel() {
    if (showEventPainel) {
      return (
        <Painel PainelName='Eventos' Icon={IoIosColorPalette}>
          <Styled.CheckboxContainer>
            <Styled.Checkbox  defaultChecked={checkboxState} onChange={() => setCheckboxState(!checkboxState)} />
            <Styled.CheckBoxMessage>Não concluidos</Styled.CheckBoxMessage>
          </Styled.CheckboxContainer>

          <Styled.ItensTitleContainer>
            <Styled.TitleContainer>
              <Styled.ItemTitle>Name</Styled.ItemTitle>
              <Styled.ItemNameIcon />
            </Styled.TitleContainer>
              
            <Styled.TitleContainer>
              <Styled.ItemTitle>Data</Styled.ItemTitle>
              <Styled.ItemDateIcon />
            </Styled.TitleContainer>
          </Styled.ItensTitleContainer>

          {handleEvents()}

          {/* por algum motivo, se esse comentario não existir, deixa de funcionar */}
        </Painel>
      )
    }
  }

  function participantsPainel() {
    if (showParticipantsPainel) {
      return(
        <Painel PainelName='Participantes' Icon={FaUsers}>
          <Styled.ItensTitleContainer>
            <Styled.TitleContainer>
              <Styled.ItemTitle>Name</Styled.ItemTitle>
              <Styled.ItemNameIcon />
            </Styled.TitleContainer>

            <Styled.TitleContainer>
              <Styled.ItemTitle>Email</Styled.ItemTitle>
              <Styled.ItemEmailIcon />
            </Styled.TitleContainer>

            <Styled.TitleContainer>
              <Styled.ItemTitle>Atividade</Styled.ItemTitle>
              <Styled.ItemActivityIcon />
            </Styled.TitleContainer>

            <Styled.TitleContainer>
              <Styled.ItemTitle>Whatsapp</Styled.ItemTitle>
              <Styled.ItemWhatsappIcon />
            </Styled.TitleContainer>

            <Styled.TitleContainer>
              <Styled.ItemTitle>Instagram</Styled.ItemTitle>
              <Styled.ItemInstagramIcon />
            </Styled.TitleContainer>
          </Styled.ItensTitleContainer>

          {handleParticipants()}
          {/*  */}
        </Painel>
      )
    }
  }

  function handleEvents() {
    const array = [1, 2, 3]

    return array.map((value, index) => {
      return (
        <Styled.ItemContainer key={index} onClick={() => handleEventButton()} >
          <Styled.Item>
            <Styled.ItemContent>nome do fulaninho</Styled.ItemContent>
          </Styled.Item>

          <Styled.Item>
            <Styled.ItemContent>08/09/2010</Styled.ItemContent>
          </Styled.Item>
        </Styled.ItemContainer>
      )
    })
  }

  function handleParticipants() {
    const array =  [1, 2, 4]

    return array.map((value, index) => {
      return (
        <Styled.ItemContainerParticipant key={index} >
          <Styled.ParticipantItem>
            <Styled.ItemContent>Nome do fulano</Styled.ItemContent>
          </Styled.ParticipantItem>

          <Styled.ParticipantItem>
            <Styled.ItemContent>serjumano@gmail.commmmmmmmmmmmmm</Styled.ItemContent>
          </Styled.ParticipantItem>

          <Styled.ParticipantItem>
            <Styled.ItemContent>Cantar</Styled.ItemContent>
          </Styled.ParticipantItem>

          <Styled.ParticipantItem>
            <Styled.ItemContent>82993991231</Styled.ItemContent>
          </Styled.ParticipantItem>

          <Styled.ParticipantItem>
            <Styled.ItemContent>matt_cardosoo</Styled.ItemContent>
          </Styled.ParticipantItem>
        </Styled.ItemContainerParticipant>
      )
    })
  }

  function handleEventButton() {
    setShowEventPainel(!showEventPainel)
    setShowParticipantsPainel(!showParticipantsPainel)
  }

  return (
    <Styled.Container>
      <Header haveMenu={true} />

      <Styled.ContentContainer>
        {eventsPainel()}
        {participantsPainel()}
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
