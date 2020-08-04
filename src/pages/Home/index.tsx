import React, { useState, ChangeEvent } from 'react'
import { useHistory } from 'react-router-dom'

import api from './../../config/axios'

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

  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function handleCheckBox() {
    setCheckboxState(!checkboxState)
  }

  function handleButton() {
    if (email && password) {
      api.post('/auth/admin', { email, password })
        .then(response => {
          setEmail('')
          setPassword('')

          if (checkboxState) {
            localStorage.setItem('token', response.data.token)
          }
  
          console.log(response.data.token)

          history.push('/events/create')
        })
        .catch((err: ErrorEvent) => console.log(err))
    } else {
      alert('Preencha todos os campos')
    }

  }

  return (
    <Styled.Container>
      <Header />

      <Styled.ContentContainer>
        <Styled.LoginContainer>
          <Styled.Title>Iniciar Sessão</Styled.Title>

          {/* <Styled.Input value={email} onChange={handleEmail} placeholder='seuemail@mail.com'/> */}
          <Input value={email} handleValue={handleEmail} placeholder='seuemail@mail.com' />
          <Input value={password} handleValue={handlePassword} type='password' placeholder='suasenha123'/>

          <Styled.CheckboxContainer>
            <Styled.Checkbox defaultChecked={checkboxState} onChange={handleCheckBox}/>
            <Styled.CheckboxMessage>manter conectado?</Styled.CheckboxMessage>
          </Styled.CheckboxContainer>
          
          <ForwardButton onClick={handleButton}/>

          <Styled.checkAdminButton>não consigo autenticar</Styled.checkAdminButton>
        </Styled.LoginContainer>
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
