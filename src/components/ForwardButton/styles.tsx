import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'

export const Button = styled.button`
  height: 100px;
  width: 100px;

  cursor: pointer;

  background-color: ${props => props.theme.colors.buttonColor};

  border: none 0;
  border-radius: 5px;

  transition: 0.5s;

  :hover {
    opacity: 0.8;
    transition: 0.5s;
  }

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

export const StyledIcon = styled(FaArrowRight)`
  height: 30px;
  width: 30px;

  color: ${props => props.theme.colors.buttonIconColor};
`
