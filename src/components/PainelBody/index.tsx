import React, { useState } from 'react'

import * as Styled from './styles'

enum Name {
  Events = 'Events',
  Participants = 'Participants',
  ScheduleView = 'ScheduleView',
  ScheduleSend = 'ScheduleSend',
}

interface PainelBodyProps {
  type: Name;
  handleType: () => void;
  scheduleSend ?: boolean;
  scheduleCreate ?: boolean;
}

// Participantes do cronograma vem com Nome e Hora

const PainelBody: React.FC<PainelBodyProps> = ({ type, handleType, scheduleSend, scheduleCreate }) => {
  const [checkboxState, setCheckboxState] = useState<boolean>(false)

  function handleEventButtonAction() {
    if (scheduleSend) {
      alert("O cronograma foi enviado a todos os participantes")
    } else {
      handleType()
    }
  }

  function handleTypePainel() {
    if (type === Name.Events) {
      return (
        <>
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
        </>
      )
    } else if (type === Name.Participants && !scheduleCreate) {
      return (
        <>
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
        </>
      )
    } else if (type === Name.ScheduleView) {
      return (
        <>
          <Styled.ItensTitleContainer>
            <Styled.TitleContainer>
              <Styled.ItemTitle>Name</Styled.ItemTitle>
              <Styled.ItemNameIcon />
            </Styled.TitleContainer>
              
            <Styled.TitleContainer>
              <Styled.ItemTitle>Horario</Styled.ItemTitle>
              <Styled.ItemDateIcon />
            </Styled.TitleContainer>
          </Styled.ItensTitleContainer>

          {handleScheduleParticipants()}
        </>
      )
    } else if (type === Name.ScheduleSend){
      return(
        <></>
      )
    } else if (scheduleCreate) {
      return (
        <>
          <Styled.ItensTitleContainer>
            <Styled.TitleContainer>
              <Styled.ItemTitle>Name</Styled.ItemTitle>
              <Styled.ItemNameIcon />
            </Styled.TitleContainer>
              
            <Styled.TitleContainer>
              <Styled.ItemTitle>Atividade</Styled.ItemTitle>
              <Styled.ItemActivityIcon />
            </Styled.TitleContainer>

            <Styled.TitleContainer>
              <Styled.ItemTitle>Horario</Styled.ItemTitle>
              <Styled.ItemDateIcon />
            </Styled.TitleContainer>
          </Styled.ItensTitleContainer>

          {handleScheduleCreate()}
        </>
      )
    }
  }

  function handleEvents() {
    const array = [1, 2, 3]

    return array.map((value, index) => {
      return (
        <Styled.ItemContainer key={index} onClick={() => handleEventButtonAction()} >
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

  function handleScheduleParticipants() {
    const array = [1, 2, 3]

    return array.map((value, index) => {
      return (
        <Styled.ItemContainerParticipant key={index} >
          <Styled.Item>
            <Styled.ItemContent>nome do fulaninho</Styled.ItemContent>
          </Styled.Item>

          <Styled.Item>
            <Styled.ItemContent>19:00</Styled.ItemContent>
          </Styled.Item>
        </Styled.ItemContainerParticipant>
      )
    })
  }

  function handleScheduleCreate() {
    const array = [1, 2, 3]

    return array.map((value, index) => {
      return (
        <Styled.ItemContainerParticipant key={index} >
          <Styled.Item>
            <Styled.ItemContent>nome do fulaninho</Styled.ItemContent>
          </Styled.Item>

          <Styled.Item>
            <Styled.ItemContent>Recitar</Styled.ItemContent>
          </Styled.Item>

          <Styled.HourInputParticipant placeholder='digite um horario'/>
        </Styled.ItemContainerParticipant>
      )
    })
  }
  
  return (
    <>
      {handleTypePainel()}
    </>
  )
}

export default PainelBody
