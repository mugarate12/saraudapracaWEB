import React from 'react'

import Header from './../../components/Header/index'
import Painel from './../../components/Painel/index'

import * as Styled from './styles'

enum Name {
  Participants = 'Participantes',
  Events = 'Eventos'
}

export default function EventList() {
  return (
    <Styled.Container>
      <Header haveMenu={true} />
      
      <Styled.ContentContainer>
        <Painel PainelName={Name.Events} />
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
