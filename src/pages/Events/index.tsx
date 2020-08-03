import React, { useState, ChangeEvent } from 'react'

import Header from './../../components/Header/index'
import Input from './../../components/Input/index'
import ForwardButton from './../../components/ForwardButton/index'

import * as Styled from './styles'

export default function Events() {
  const [eventName, setEventName] = useState<string>('')

  function handleEventName(e: ChangeEvent<HTMLInputElement>) {
    setEventName(e.target.value)
  }

  function handleButton() {
    console.log('ok')
  }

  return (
    <Styled.Container>
      <Header haveMenu={true} />
      
      <Styled.ContentContainer>
        <Styled.FormContainer>
          <Styled.Title>Criar evento</Styled.Title>

          <Input value={eventName} handleValue={handleEventName} placeholder='Sarau da praça' />

          <ForwardButton onClick={handleButton} />
        </Styled.FormContainer>
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
