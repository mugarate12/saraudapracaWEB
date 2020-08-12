import React from 'react'

import Header from './../../components/Header/index'
import PageTitle from './../../components/PageTitle/index'

import * as Styled from './styles'

export default function AdminConfig() {
  return (
    <Styled.Container>
      <Header haveMenu={true} />
      <PageTitle content='Administrador' />

      
    </Styled.Container>
  )
}
