import React, { useState } from 'react'

import Header from './../../components/Header/index'
import PageTitle from './../../components/PageTitle/index'
import Input from './../../components/Input/index'
import ForwardButton from './../../components/ForwardButton/index'

import * as Styled from './styles'

export default function AdminCreate() {
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [buttonDisable, setButtonDisable] = useState<boolean>(false)

  function handleButton() {
    setButtonDisable(true)
  }

  return (
    <Styled.Container>
      <Header haveMenu={true} />
      <PageTitle content='Administrador' />

      <Styled.ContentContainer>
        <Styled.FormContainer>
          <Styled.Title>Criar Administrador</Styled.Title>

          <Input value={email} handleValue={(e) => setEmail(e.target.value)} placeholder='SeuEmail@mail.com' />
          <Input value={username} handleValue={(e) => setUsername(e.target.value)} placeholder='username' />
          <Input value={password} handleValue={(e) => setPassword(e.target.value)} placeholder='minhasenha123' type='password'/>
          <Input value={confirmPassword} handleValue={(e) => setConfirmPassword(e.target.value)} placeholder='minhasenha123' type='password'/>

          <ForwardButton onClick={handleButton} disabled={buttonDisable}/>
        </Styled.FormContainer>
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
