import React from 'react'
import { IoIosColorPalette } from 'react-icons/io'

import Header from './../../components/Header/index'
import Painel from './../../components/Painel/index'

import * as Styled from './styles'

export default function EventList() {
  return (
    <Styled.Container>
      <Header haveMenu={true} />

      <Styled.ContentContainer>
        <Painel PainelName='Eventos' Icon={IoIosColorPalette}/>
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
