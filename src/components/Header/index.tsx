import React, { useState } from 'react'

import * as Styled from './styles'

import logo from './../../assets/imgs/logo.svg'

interface HeaderProps {
  haveMenu?: boolean;
}

const Header: React.FC<HeaderProps> = ({ haveMenu }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showEventOptions, setShowEventOptions] = useState<boolean>(false) 

  function sideBarEventOptions() {
    if (showEventOptions) {
      return (
        <Styled.SubLi>
          <Styled.SubLiOption>Criar</Styled.SubLiOption>
          <Styled.SubLiOption>Ver</Styled.SubLiOption>
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
                <Styled.LiOption>Home</Styled.LiOption>
                <Styled.ArrowDownIcon />
              </Styled.SidebarButton>
            </Styled.Li>
            
            {sideBarEventOptions()}
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
