import React from 'react'

import * as Styled from './styles'

interface ForwardButtonProps {
  onClick: () => void;
}

const ForwardButton: React.FC<ForwardButtonProps> = ({ onClick }) => {
  return (
    <Styled.Button onClick={onClick} >
      <Styled.StyledIcon />
    </Styled.Button>
  )
}

export default ForwardButton
