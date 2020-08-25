import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Switch from 'react-switch'
import { ThemeContext as MyThemeContext} from './../../Navigator'
import { ThemeContext } from 'styled-components'

import * as Styled from './styles'

import logo from './../../assets/imgs/logo.svg'

interface HeaderProps {
  haveMenu?: boolean;
}

const Header: React.FC<HeaderProps> = ({ haveMenu }) => {
  const history = useHistory()
  const toogleTheme = useContext(MyThemeContext)
  const theme = useContext(ThemeContext)

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showEventOptions, setShowEventOptions] = useState<boolean>(false) 
  const [showScheduleOptions, setShowScheduleOptions] = useState<boolean>(false)
  const [showAdminOptions, setShowAdminOptions] = useState<boolean>(false)

  function renderSideBarOptions(optionBoolean: boolean, menuOptions: Array<String>, pathOptions?: Array<String>) {
    function handleSideBarButton(index: number) {
      history.push(`${!!pathOptions ? pathOptions[index] : '/'}`)
      setShowMenu(false)
    }
    
    if (optionBoolean) {
      return (
        <Styled.SubLi>
          {menuOptions.map((value, index) => {
            return (
              <Styled.SidebarButton key={index} onClick={() => handleSideBarButton(index)} >
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
            
            {renderSideBarOptions(showEventOptions, ['Criar', 'Ver'], ['/events/create', '/events/list'])}

            <Styled.Li>
              <Styled.SidebarButton onClick={() => handleBooleanState(showScheduleOptions, setShowScheduleOptions)} >
                <Styled.ScheduleIcon />
                <Styled.LiOption>Cronograma</Styled.LiOption>
                <Styled.ArrowDownIcon />
              </Styled.SidebarButton>
            </Styled.Li>

            {renderSideBarOptions(showScheduleOptions, ['Criar/Editar', 'Ver', 'Enviar'], ['/schedule/create', '/schedule/view', '/schedule/send'])}

            <Styled.Li>
              <Styled.SidebarButton onClick={() => handleBooleanState(showAdminOptions, setShowAdminOptions)} >
                <Styled.AdminIcon />
                <Styled.LiOption>Administrador</Styled.LiOption>
                <Styled.ArrowDownIcon />
              </Styled.SidebarButton>
            </Styled.Li>

            {renderSideBarOptions(showAdminOptions, ['Criar', 'Configurações'], ['/admin/create', '/admin/config'])}

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

  function checkedTheme() {
    return theme.title === 'default' ? false : true
  }
  
  return (
    <Styled.Container>
      <Styled.MenuAndLogoContainer>
        {handleMenu()}
        {sideBar()}
        <Styled.LogoImg src={logo} alt='Logo do Sarau da Praça' />
      </Styled.MenuAndLogoContainer>

      <Styled.SwitchContainer>
        <Switch
          checked={checkedTheme()}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={() => toogleTheme()}
          height={10}
          width={40}
          handleDiameter={20}
        />
      </Styled.SwitchContainer>
    </Styled.Container>
  )
}

export default Header
