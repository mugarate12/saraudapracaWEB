import React, { useState, useEffect, ChangeEvent } from 'react'

import api from './../../config/axios'

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

interface ApiEvents {
  name: string;
  date: string;
}

// Participantes do cronograma vem com Nome e Hora

const PainelBody: React.FC<PainelBodyProps> = ({ type, handleType, scheduleSend, scheduleCreate }) => {
  const [checkboxState, setCheckboxState] = useState<boolean>(false)
  const [hourParticipant, setHourParticipant] = useState<Array<string>>(['', '', ''])

  const [events, setEvents] = useState<Array<ApiEvents>>([])

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token') || ''

    async function fetchEvents() {
      await api.get('/event?page=1', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          setEvents(response.data.events)
        })
        .catch(error => console.log(error))
    }

    async function fetchEventNotDone() {
      await api.get('/event/valid', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        setEvents(response.data.events)
      })
      .catch(error => console.log(error))
    }

    if (checkboxState) {
      fetchEventNotDone()
    } else {
      fetchEvents()
    }
  }, [checkboxState])

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

          <Styled.Button onClick={handleButton} >
            <Styled.IconButton />
          </Styled.Button>
        </>
      )
    }
  }

  function handleEvents() {
    return events.map((event, index) => {
      return (
        <Styled.ItemContainer key={index} onClick={() => handleEventButtonAction()} >
          <Styled.Item>
            <Styled.ItemContent>{event.name}</Styled.ItemContent>
          </Styled.Item>

          <Styled.Item>
            <Styled.ItemContent>{event.date}</Styled.ItemContent>
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
    return hourParticipant.map((value, index) => {
      return (
        <Styled.ItemContainerParticipant key={index} >
          <Styled.Item>
            <Styled.ItemContent>nome do fulaninho</Styled.ItemContent>
          </Styled.Item>

          <Styled.Item>
            <Styled.ItemContent>Recitar</Styled.ItemContent>
          </Styled.Item>

          <Styled.HourInputParticipant defaultValue={hourParticipant[index]} onChange={(e) => setHour(index, e)} placeholder='digite um horario'/>
        </Styled.ItemContainerParticipant>
      )
    })
  }

  function setHour(index: number, e: ChangeEvent<HTMLInputElement>) {
    let hourParticipantCopy = hourParticipant
    hourParticipantCopy[index] = e.target.value

    setHourParticipant(hourParticipantCopy)
  }

  function handleButton() {
    console.log(hourParticipant)
  }
  
  return (
    <>
      {handleTypePainel()}
    </>
  )
}

export default PainelBody
