import React from 'react'

import * as Styled from './styles'

interface ForwardButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const ForwardButton: React.FC<ForwardButtonProps> = ({ onClick, disabled }) => {
  return (
    <Styled.Button onClick={onClick} disabled={disabled} >
      <Styled.StyledIcon />
    </Styled.Button>
  )
}

export default ForwardButton
