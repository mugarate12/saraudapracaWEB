import styled from 'styled-components'

export const Input = styled.input`
  width: 75%;
  height: 20px;

  margin-bottom: 10px;
  padding-left: 5px;

  border-style: none;
  
  border-left-style: solid;
  border-left-width: 2px;
  border-left-color: ${props => props.theme.colors.borderColor};

  border-right-style: solid;
  border-right-width: 2px;
  border-right-color: ${props => props.theme.colors.borderColor};
  
  background-color: ${props => props.theme.colors.inputBackgroundColor};

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`