import React, { useState, ChangeEvent, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import PageTitle from './../../components/PageTitle/index'
import Header from './../../components/Header/index'
import Input from './../../components/Input/index'
import ForwardButton from './../../components/ForwardButton/index'

import * as Styled from './styles'

export default function Events() {
  const history = useHistory()
  const [eventName, setEventName] = useState<string>('')
  const [date, setDate] = useState<string>('')

  // useEffect(() => {
  //   const token = localStorage.getItem('token')

  //   if (!token) {
  //     history.push('/')
  //   }
  // })

  function handleEventName(e: ChangeEvent<HTMLInputElement>) {
    setEventName(e.target.value)
  }

  function handleDate(e: ChangeEvent<HTMLInputElement>) {
    setDate(e.target.value)
  }
  
  function handleButton() {
    console.log(eventName, date)
  }

  return (
    <Styled.Container>
      <Header haveMenu={true} />
      <PageTitle content='Eventos' />

      <Styled.ContentContainer>
        <Styled.FormContainer>
          <Styled.Title>Criar evento</Styled.Title>

          <Input value={eventName} handleValue={handleEventName} placeholder='Sarau da praça' />
          <Input value={date} handleValue={handleDate} type='date' />

          <ForwardButton onClick={handleButton} />
        </Styled.FormContainer>
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
