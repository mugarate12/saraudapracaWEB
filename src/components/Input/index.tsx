import React, { ChangeEvent } from 'react'

import * as Styled from './styles'

interface InputProps {
  value: string;
  handleValue: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ value, handleValue, placeholder, type }) => {
  return (
    <Styled.Input value={value} onChange={handleValue} placeholder={placeholder} type={type} />
  )
}

export default Input
