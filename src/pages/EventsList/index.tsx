import React, { useState } from 'react'
import { IoIosColorPalette } from 'react-icons/io'

import Header from './../../components/Header/index'
import Painel from './../../components/Painel/index'

import * as Styled from './styles'

export default function EventList() {
  const [checkboxState, setCheckboxState] = useState<boolean>(false)

  function handleEvents() {
    const array = [1, 2, 3]

    return array.map((value, index) => {
      return (
        <Styled.ItemContainer key={index}>
          <Styled.Item>
            <Styled.ItemContent>nome do fulaninho</Styled.ItemContent>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemContent>data do eventinho</Styled.ItemContent>
          </Styled.Item>
        </Styled.ItemContainer>
      )
    })
  }

  return (
    <Styled.Container>
      <Header haveMenu={true} />

      <Styled.ContentContainer>
        <Painel PainelName='Eventos' Icon={IoIosColorPalette}>
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

          {/* por algum motivo, se esse comentario não existir, deixa de funcionar */}
        </Painel>
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
