import React, { ReactChild } from 'react'

import { IconType } from 'react-icons'

import * as Styled from './styles'

interface PainelProps {
  PainelName: string;
  Icon: IconType;
  children?: Array<ReactChild>;
}

const Painel: React.FC<PainelProps> = ({ PainelName, Icon, children }) => {
  return (
    <Styled.Container>
      <Styled.CardHeader>
        <Styled.CardTitle>{PainelName}</Styled.CardTitle>
        {!!Icon ? <Icon style={{ fontSize: '16px', paddingLeft: '10px' }} /> : null}
        <Styled.CardHeaderLine />
      </Styled.CardHeader>

      <Styled.CardBody>
        {/* aceita que coloque componentes e tags dentro deste */}
        {children}
      </Styled.CardBody>
    </Styled.Container>
  )
}

export default Painel
