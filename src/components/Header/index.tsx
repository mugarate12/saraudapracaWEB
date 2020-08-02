import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import * as Styled from './styles'

import logo from './../../assets/imgs/logo.svg'

interface HeaderProps {
  haveMenu?: boolean;
}

const Header: React.FC<HeaderProps> = ({ haveMenu }) => {
  const history = useHistory()

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showEventOptions, setShowEventOptions] = useState<boolean>(false) 
  const [showScheduleOptions, setShowScheduleOptions] = useState<boolean>(false)
  const [showAdminOptions, setShowAdminOptions] = useState<boolean>(false)

  function renderSideBarOptions(optionBoolean: boolean, menuOptions: Array<String>) {
    if (optionBoolean) {
      return (
        <Styled.SubLi>
          {menuOptions.map((value, index) => {
            return (
              <Styled.SidebarButton key={index} onClick={() => history.push('/')} >
                <Styled.SubLiOption key={index}>{value}</Styled.SubLiOption>
              </Styled.SidebarButton>
            )
          })}
        </Styled.SubLi>
      )
    }
  }

  function sideBar() {
    if (showMenu) {
      return (
        <Styled.sideBarContainer>
          <ul>
            <Styled.SidebarButton onClick={() => handleBooleanState(showMenu, setShowMenu)} >
              <Styled.ClosedIcon />
            </Styled.SidebarButton>

            <Styled.Li>
              <Styled.SidebarButton onClick={() => handleBooleanState(showEventOptions, setShowEventOptions)} >
                <Styled.EventIcon />
                <Styled.LiOption>Eventos</Styled.LiOption>
                <Styled.ArrowDownIcon />
              </Styled.SidebarButton>
            </Styled.Li>
            
            {renderSideBarOptions(showEventOptions, ['Criar', 'Ver'])}

            <Styled.Li>
              <Styled.SidebarButton onClick={() => handleBooleanState(showScheduleOptions, setShowScheduleOptions)} >
                <Styled.ScheduleIcon />
                <Styled.LiOption>Cronograma</Styled.LiOption>
                <Styled.ArrowDownIcon />
              </Styled.SidebarButton>
            </Styled.Li>

            {renderSideBarOptions(showScheduleOptions, ['Criar', 'Ver', 'Enviar'])}

            <Styled.Li>
              <Styled.SidebarButton onClick={() => handleBooleanState(showAdminOptions, setShowAdminOptions)} >
                <Styled.AdminIcon />
                <Styled.LiOption>Administrador</Styled.LiOption>
                <Styled.ArrowDownIcon />
              </Styled.SidebarButton>
            </Styled.Li>

            {renderSideBarOptions(showAdminOptions, ['Criar', 'Configurações'])}

            <Styled.Li>
              <Styled.SidebarButton onClick={() => history.push('/')} >
                <Styled.SignInIcon />
                <Styled.LiOption>Sair</Styled.LiOption>
              </Styled.SidebarButton>
            </Styled.Li>
          </ul>
        </Styled.sideBarContainer>
      )
    }
  }

  function handleBooleanState(optionBoolean: boolean, setStateOption: React.Dispatch<React.SetStateAction<boolean>>) {
    setStateOption(!optionBoolean)
  }

  function handleMenu() {
    if (haveMenu) {
      return (
        <Styled.SidebarButton onClick={() => handleBooleanState(showMenu, setShowMenu)}>
          <Styled.BarIcon />
        </Styled.SidebarButton>
      )
    }
  }
  
  return (
    <Styled.Container>
      {handleMenu()}
      {sideBar()}
      <Styled.LogoImg src={logo} alt='Logo do Sarau da Praça' />
    </Styled.Container>
  )
}

export default Header
