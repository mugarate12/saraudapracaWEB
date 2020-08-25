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
  id: number;
  name: string;
  date: string;
}

interface ApiParticipants {
  id: number;
  name: string;
  email: string;
  activity: string;
  num_phone: string;
  instagram: string;
}

interface ApiScheduleParticipants {
  id: number;
  name: string;
  hour: string;
  activity: string;
}

interface ParticipantsToCreateSchedule {
  participantIDFK: number;
  eventIDFK: Number;
  hour: string;
}

interface hourParticipantInterface {
  participantID: number;
  hour: string;
}

interface updateParticipantsSchedule {
  id: number;
  hour: string;
  name: string;
}

// Participantes do cronograma vem com Nome e Hora

const PainelBody: React.FC<PainelBodyProps> = ({ type, handleType, scheduleSend, scheduleCreate }) => {
  const [checkboxState, setCheckboxState] = useState<boolean>(false)
  const [hourParticipant, setHourParticipant] = useState<Array<hourParticipantInterface>>([])

  const token = localStorage.getItem('token') || sessionStorage.getItem('token') || ''
  const [events, setEvents] = useState<Array<ApiEvents>>([])
  const [eventSelected, setEventSelected] = useState<Number>()
  const [participants, setParticipants] = useState<Array<ApiParticipants>>([])
  const [scheduleParticipants, setScheduleParticipants] = useState<Array<ApiScheduleParticipants>>([])

  useEffect(() => {
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
      await api.get('/event/valid?page=1', {
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
  }, [checkboxState, token])

  useEffect(() => {
    async function fetchParticipants() {
      await api.get(`/event/${eventSelected}/participats?page=1`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          setParticipants(response.data.participants)
        })
        .catch(error => console.log(error))
    }

    if (eventSelected) {
      fetchParticipants()
    }
  }, [eventSelected, token])

  useEffect(() => {
    async function fetchScheduleParticipants() {
      await api.get(`/events/${eventSelected}/schedule`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          setScheduleParticipants(response.data.schedule.participants)
        })
        .catch(error => console.log(error))
    }

    if (eventSelected && scheduleCreate) {
      fetchScheduleParticipants()
    }
  }, [eventSelected, token, scheduleCreate, participants])

  function handleEventButtonAction(eventID ?: Number) {
    if (scheduleSend) {
      alert("O cronograma foi enviado a todos os participantes")
    } else {
      handleType()
      if (eventID) {
        console.log(eventID)
        setEventSelected(eventID)
      }
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
        <Styled.ItemContainer key={index} onClick={() => handleEventButtonAction(event.id)} >
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
    return participants.map((participant) => {
      return (
        <Styled.ItemContainerParticipant key={participant.id} >
          <Styled.ParticipantItem>
            <Styled.ItemContent>{participant.name}</Styled.ItemContent>
          </Styled.ParticipantItem>

          <Styled.ParticipantItem>
            <Styled.ItemContent>{participant.email}</Styled.ItemContent>
          </Styled.ParticipantItem>

          <Styled.ParticipantItem>
            <Styled.ItemContent>{participant.activity}</Styled.ItemContent>
          </Styled.ParticipantItem>

          <Styled.ParticipantItem>
            <Styled.ItemContent>{participant.num_phone}</Styled.ItemContent>
          </Styled.ParticipantItem>

          <Styled.ParticipantItem>
            <Styled.ItemContent>{participant.instagram}</Styled.ItemContent>
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
    return participants.map((participant, index) => {
      return (
        <Styled.ItemContainerParticipant key={index} >
          <Styled.Item>
            <Styled.ItemContent>{participant.name}</Styled.ItemContent>
          </Styled.Item>

          <Styled.Item>
            <Styled.ItemContent>{participant.activity}</Styled.ItemContent>
          </Styled.Item>

          <Styled.HourInputParticipant defaultValue={getHour(participant.id)} onChange={(e) => setHour(participant.id, e)} placeholder='digite um horario'/>
        </Styled.ItemContainerParticipant>
      )
    })
  }

  function getHour(idParticipant: number) {
    let hour = ''
    scheduleParticipants.forEach((scheduleParticipant) => {
      if (idParticipant === scheduleParticipant.id) {
        hour = scheduleParticipant.hour
      }
    })

    return hour
  }

  function setHour(index: number, e: ChangeEvent<HTMLInputElement>) {
    let hourParticipantCopy = hourParticipant

    hourParticipant.forEach((value, indexH) => {
      if (value.participantID === index) {
        delete hourParticipantCopy[indexH]
      }
    })

    hourParticipantCopy.push({
      participantID: index,
      hour: e.target.value
    })

    setHourParticipant(hourParticipantCopy)
  }

  async function handleButton() {
    // console.log(hourParticipant)
    let ScheduleParticipantsActualHour = scheduleParticipants

    hourParticipant.forEach((value, index) => {
      scheduleParticipants.forEach((participant, index) => {
        if (value.participantID === participant.id) {
          delete ScheduleParticipantsActualHour[index]
        }
      })
    })
    
    let arrayToCreateScheduele: Array<ParticipantsToCreateSchedule> = []
    hourParticipant.forEach((value, index) => {
      arrayToCreateScheduele.push({
        eventIDFK: eventSelected || 0,
        hour: value.hour,
        participantIDFK: value.participantID
      })
    })
    ScheduleParticipantsActualHour.forEach((participantActualHour) => {
      arrayToCreateScheduele.push({
        eventIDFK: eventSelected || 0,
        hour: participantActualHour.hour,
        participantIDFK: participantActualHour.id
      })
    })
    
    if (scheduleParticipants.length === 0) {
      await api.post('/schedule', {
        participants: arrayToCreateScheduele
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(async (response) => {
          console.log(response)

          await api.get(`/events/${eventSelected}/schedule`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            .then(response => {
              setScheduleParticipants(response.data.schedule.participants)
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    } else {
      console.log(arrayToCreateScheduele)
      let updateParticipantsHour: Array<updateParticipantsSchedule> = []
      
      participants.forEach((participant, index) => {
        arrayToCreateScheduele.forEach((scheduleParticipant, indexP) => {
          if (participant.id === scheduleParticipant.participantIDFK) {
            updateParticipantsHour.push({
              hour: scheduleParticipant.hour,
              id: scheduleParticipant.participantIDFK,
              name: participant.name
            })
          }
        })
      })

      await api.put(`/events/${eventSelected}/schedule`, {
        participants: updateParticipantsHour
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(console.log)
        .catch(console.log)
    }
  }
  
  return (
    <>
      {handleTypePainel()}
    </>
  )
}

export default PainelBody
