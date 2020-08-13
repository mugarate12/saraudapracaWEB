import React, { useState } from 'react'

import Header from './../../components/Header/index'
import PageTitle from './../../components/PageTitle/index'

import * as Styled from './styles'

export default function AdminConfig() {
  const [username, setUsername] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  function handleButton(fieldStateArray: Array<string>) {
    console.log(fieldStateArray[0])
    console.log(fieldStateArray?.[1] ?? 'Não tem o segundo campo')
  }

  return (
    <Styled.Container>
      <Header haveMenu={true} />
      <PageTitle content='Administrador' />

      <Styled.ContentContainer>
        <Styled.PainelContainer>
          <Styled.Title>Mudar informações</Styled.Title>

          <Styled.FieldsContainer>
            <Styled.InputsContainer>
              <Styled.Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
            </Styled.InputsContainer>
            <Styled.Button onClick={() => handleButton([username])} >
              <Styled.ButtonIcon />
            </Styled.Button>
          </Styled.FieldsContainer>
          
          <Styled.FieldsContainer>
            <Styled.InputsContainer>
              <Styled.Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Meu nome é fulano' />
            </Styled.InputsContainer>
            <Styled.Button onClick={() => handleButton([name])} >
              <Styled.ButtonIcon />
            </Styled.Button>
          </Styled.FieldsContainer>

          <Styled.FieldsContainer>
            <Styled.InputsContainer>
              <Styled.Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='seuEmail@mail.com' />
            </Styled.InputsContainer>
            <Styled.Button onClick={() => handleButton([email])} >
              <Styled.ButtonIcon />
            </Styled.Button>
          </Styled.FieldsContainer>
          
          <Styled.FieldsContainer>
            <Styled.InputsContainer>
              <Styled.Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='minhasenha123' type='password' />
              <Styled.Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='minhasenha123' type='password' />
            </Styled.InputsContainer>
            <Styled.Button onClick={() => handleButton([password])} >
              <Styled.ButtonIcon />
            </Styled.Button>
          </Styled.FieldsContainer>
          


        </Styled.PainelContainer>
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
