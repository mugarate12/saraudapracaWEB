import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import PageTitle from './../../components/PageTitle/index'
import Header from './../../components/Header/index'
import Input from './../../components/Input/index'
import ForwardButton from './../../components/ForwardButton/index'

import * as Styled from './styles'

import api from './../../config/axios'

interface ApiRequestError {
  error: string;
  message: string;
}

export default function Events() {
  const history = useHistory()
  const [eventName, setEventName] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [hour, setHour] = useState<string>('')
  const [token, setToken] = useState<string>('')
  const [buttonDisable, setButtonDisable] = useState<boolean>(false)


  useEffect(() => {
    const localStorageToken = localStorage.getItem('token')
    const sessionStorageToken = sessionStorage.getItem('token')
    setToken((!!localStorageToken ? localStorageToken : sessionStorageToken) || '')

    if (!localStorageToken && !sessionStorageToken) {
      history.push('/')
    }
  }, [token, history])
  
  async function handleButton() {
    setButtonDisable(true)

    console.log(eventName, date, hour)
    console.log(`${date} ${hour}`)
    console.log(token)

    await api.post('/event', {
      name: eventName,
      date: `${date} ${hour}`
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setButtonDisable(false)
        console.log(response)
      })
      .catch((error: ApiRequestError) => {
        setButtonDisable(false)
        console.log(error.message)
      })
  }

  return (
    <Styled.Container>
      <Header haveMenu={true} />
      <PageTitle content='Eventos' />

      <Styled.ContentContainer>
        <Styled.FormContainer>
          <Styled.Title>Criar evento</Styled.Title>

          <Input value={eventName} handleValue={(e) => setEventName(e.target.value)} placeholder='Sarau da praça' />
          <Input value={date} handleValue={(e) => setDate(e.target.value)} type='date' />
          <Input value={hour} handleValue={(e) => setHour(e.target.value)} type='time' />

          <ForwardButton onClick={handleButton} disabled={buttonDisable}/>
        </Styled.FormContainer>
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
