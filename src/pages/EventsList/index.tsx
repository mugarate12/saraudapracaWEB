import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import PageTitle from './../../components/PageTitle/index'
import Header from './../../components/Header/index'
import Painel from './../../components/Painel/index'

import * as Styled from './styles'

enum Name {
  Events = 'Events',
  Participants = 'Participants',
}

export default function EventList() {
  const history = useHistory()
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    const localStorageToken = localStorage.getItem('token')
    const sessionStorageToken = sessionStorage.getItem('token')
    setToken((!!localStorageToken ? localStorageToken : sessionStorageToken) || '')

    if (!localStorageToken && !sessionStorageToken) {
      history.push('/')
    }
  }, [token, history])

  return (
    <Styled.Container>
      <Header haveMenu={true} />
      <PageTitle content='Eventos' />
      
      <Styled.ContentContainer>
        <Painel PainelName={Name.Events} />
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
