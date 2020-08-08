import React, {  useState } from 'react'

import * as Styled from './styles'

import PainelBody from './../PainelBody/index'

enum Name {
  Participants = 'Participantes',
  Events = 'Eventos'
}

interface PainelProps {
  PainelName: Name;
}

const Painel: React.FC<PainelProps> = ({ PainelName }) => {
  const [PainelState, setPainelState] = useState<Name>(PainelName)
  
  function handlePainelName() {
    if ( PainelState === Name.Events) {
      setPainelState(Name.Participants)
    } else {
      setPainelState(Name.Events)
    }
  }

  return (
    <Styled.Container>
      <Styled.CardHeader>
        <Styled.CardTitle>{PainelState}</Styled.CardTitle>
        {PainelState === Name.Events ? <Styled.EventIcon /> : <Styled.ParticipantsIcon />}
        <Styled.CardHeaderLine />
      </Styled.CardHeader>

      <Styled.CardBody>
        <PainelBody type={PainelState} handleType={handlePainelName} />
      </Styled.CardBody>
    </Styled.Container>
  )
}

export default Painel
