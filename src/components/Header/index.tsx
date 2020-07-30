import React, { useState } from 'react'

import * as Styled from './styles'

import logo from './../../assets/imgs/logo.svg'

interface HeaderProps {
  haveMenu?: boolean;
}

const Header: React.FC<HeaderProps> = ({ haveMenu }) => {
  const [showMenu, setShowMenu ] = useState<boolean>(false)

  function sideBar() {
    if (showMenu) {
      return (
        <Styled.sideBarContainer>
          <ul>
            <Styled.SidebarButton onClick={handleSideBar} >
              <Styled.ClosedIcon />
            </Styled.SidebarButton>

            <Styled.Li>
              <Styled.LiOption>Home</Styled.LiOption>
              <Styled.ArrowDownIcon />
            </Styled.Li>
          </ul>
        </Styled.sideBarContainer>
      )
    }
  }

  function handleSideBar() {
    setShowMenu(!showMenu)
  }

  function handleMenu() {
    if (haveMenu) {
      return (
        <Styled.SidebarButton onClick={handleSideBar}>
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
