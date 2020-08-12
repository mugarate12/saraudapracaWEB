import React from 'react'

import PageTitle from './../../components/PageTitle/index'
import Header from './../../components/Header/index'
import Painel from './../../components/Painel/index'

import * as Styled from './styles'

enum Name {
  Events = 'Events',
  Participants = 'Participants',
}

export default function EventList() {
  return (
    <Styled.Container>
      <Header haveMenu={true} />
      <PageTitle content='Cronograma' />
      
      <Styled.ContentContainer>
        <Painel PainelName={Name.Events} />
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
