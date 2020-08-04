import React from 'react'

import { IconType } from 'react-icons'

import * as Styled from './styles'

interface PainelProps {
  PainelName: string;
  Icon: IconType;
}

const Painel: React.FC<PainelProps> = ({ PainelName, Icon }) => {
  return (
    <Styled.Container>
      <Styled.CardHeader>
        <Styled.CardTitle>{PainelName}</Styled.CardTitle>
        {!!Icon ? <Icon style={{ fontSize: '16px', paddingLeft: '10px' }} /> : null}
        <Styled.CardHeaderLine />
      </Styled.CardHeader>
    </Styled.Container>
  )
}

export default Painel
