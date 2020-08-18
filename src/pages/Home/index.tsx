import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from './../../config/axios'

import PageTitle from './../../components/PageTitle/index'
import Header from './../../components/Header/index'
import ForwardButton from './../../components/ForwardButton/index'
import Input from './../../components/Input/index'

import * as Styled from './styles'

// admin@gmail.com
// adminpassword

export default function Home() {
  let history = useHistory()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checkboxState, setCheckboxState] = useState<boolean>(false)

  async function handleButton() {
    if (email && password) {
      await api.post('/auth/admin', { email, password })
        .then(response => {
          setEmail('')
          setPassword('')

          if (checkboxState) {
            localStorage.setItem('token', response.data.token)
          }

          history.push('/events/create')
        })
        .catch((err: ErrorEvent) => alert('Dados invalidos'))
    } else {
      alert('Preencha todos os campos')
    }

  }

  return (
    <Styled.Container>
      <Header />
      <PageTitle content='Página inicial' />

      <Styled.ContentContainer>
        <Styled.LoginContainer>
          <Styled.Title>Iniciar Sessão</Styled.Title>
          
          <Input value={email} handleValue={(e) => setEmail(e.target.value)} placeholder='seuemail@mail.com' />
          <Input value={password} handleValue={(e) => setPassword(e.target.value)} type='password' placeholder='suasenha123'/>

          <Styled.CheckboxContainer>
            <Styled.Checkbox defaultChecked={checkboxState} onChange={() => setCheckboxState(!checkboxState)} />
            <Styled.CheckboxMessage>manter conectado?</Styled.CheckboxMessage>
          </Styled.CheckboxContainer>
          
          <ForwardButton onClick={handleButton}/>

          <Styled.checkAdminButton>
            <Styled.TextCheckAdminButton>não consigo autenticar</Styled.TextCheckAdminButton>
          </Styled.checkAdminButton>
        </Styled.LoginContainer>
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
