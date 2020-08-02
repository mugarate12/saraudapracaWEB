import styled from 'styled-components'
import { FaBars, FaArrowDown, FaClock, FaUser, FaSignInAlt } from 'react-icons/fa'
import { IoMdClose, IoIosColorPalette } from 'react-icons/io'

export const Container = styled.header`
  height: 60px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.borderColor};
`

export const LogoImg = styled.img`
  width: 80px;
  height: 30px;

  margin-left: 20px;
`

export const SidebarButton = styled.button`
  border: none 0;
  background-color: transparent;
  
  display: flex;
  flex-direction: row;

  cursor: pointer;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  :hover {
    opacity: 0.5;
  }
`

export const BarIcon = styled(FaBars)`
  width: 70px;
  height: 20px;
`

export const sideBarContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;

  width: 50vh;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.colors.sideBarColor};
`

export const ClosedIcon = styled(IoMdClose)`
  width: 30px;
  height: 30px;

  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;

`

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  width: 50vh;
  height: 30px;

  :hover {
    cursor: pointer;
    /* background-color: grey; */
  }
`

export const SubLi = styled.li`
  display: flex;
  flex-direction: column;

  width: 50vh;

  padding-bottom: 5px;
`

export const LiOption = styled.p`
  padding-left: 10px;

  font-size: 16px;
  color: ${props => props.theme.colors.fontColor};

  @media (max-height: 360px) {
    font-size: 12px;
  }
`

export const SubLiOption = styled.p`
  padding-left: 60px;
  padding-top: 5px;

  font-size: 16px;
  color: ${props => props.theme.colors.fontColor};

  @media (max-height: 360px) {
    font-size: 12px;
  }
`

export const ArrowDownIcon = styled(FaArrowDown)`
  width: 13px;
  height: 13px;

  color: ${props => props.theme.colors.sideBarIconsColor};

  padding-left: 15px;

  @media (max-height: 360px) {
    width: 10px;
    height: 10px;
  }
`

export const EventIcon = styled(IoIosColorPalette)`
  width: 18px;
  height: 18px;

  color: ${props => props.theme.colors.sideBarIconsColor};

  padding-left: 20px;
`

export const ScheduleIcon = styled(FaClock)`
  width: 16px;
  height: 16px;

  color: ${props => props.theme.colors.sideBarIconsColor};

  padding-left: 20px;
`

export const AdminIcon = styled(FaUser)`
  width: 16px;
  height: 16px;

  color: ${props => props.theme.colors.sideBarIconsColor};

  padding-left: 20px;
`

export const SignInIcon = styled(FaSignInAlt)`
  width: 16px;
  height: 16px;

  color: ${props => props.theme.colors.sideBarIconsColor};

  padding-left: 20px;
`
