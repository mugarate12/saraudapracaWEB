import React, { useState } from 'react'
import { IoIosColorPalette } from 'react-icons/io'

import Header from './../../components/Header/index'
import Painel from './../../components/Painel/index'

import * as Styled from './styles'

export default function EventList() {
  const [checkboxState, setCheckboxState] = useState<boolean>(false)

  return (
    <Styled.Container>
      <Header haveMenu={true} />

      <Styled.ContentContainer>
        <Painel PainelName='Eventos' Icon={IoIosColorPalette}>
          <Styled.CheckboxContainer>
            <Styled.Checkbox  defaultChecked={checkboxState} onChange={() => setCheckboxState(!checkboxState)} />
            <Styled.CheckBoxMessage>Não concluidos</Styled.CheckBoxMessage>


          </Styled.CheckboxContainer>
        </Painel>
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
