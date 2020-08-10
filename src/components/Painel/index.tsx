import React, {  useState } from 'react'

import * as Styled from './styles'

import PainelBody from './../PainelBody/index'

enum Name {
  Events = 'Events',
  Participants = 'Participants',
  ScheduleView = 'ScheduleView',
  ScheduleSend = 'ScheduleSend',
}

interface PainelProps {
  PainelName: Name;
  scheduleView?: boolean;
  scheduleSend?: boolean;
}

const Painel: React.FC<PainelProps> = ({ PainelName, scheduleView, scheduleSend }) => {
  const [PainelState, setPainelState] = useState<Name>(PainelName)
  
  function handlePainelState() {
    if (PainelState === Name.Events && !scheduleView && !scheduleSend) {
      setPainelState(Name.Participants)
    } else if (PainelState !== Name.Events && !scheduleView && !scheduleSend) {
      setPainelState(Name.Events)
    } else if (PainelState === Name.Events && scheduleView) {
      setPainelState(Name.ScheduleView)
    } else if (PainelState === Name.Events && scheduleSend) {
      setPainelState(Name.Events)
    }
  }

  function handlePainelName() {
    if (PainelState === Name.Events) {
      return 'Eventos'
    } else {
      return 'Participantes'
    }
  }

  return (
    <Styled.Container>
      <Styled.CardHeader>
        {PainelState !== Name.Events? (
          <Styled.BackButtonContainer onClick={() => setPainelState(Name.Events)} >
            <Styled.BackIcon />
          </Styled.BackButtonContainer>
        ) : null}
        <Styled.CardTitle>{handlePainelName()}</Styled.CardTitle>
        {PainelState === Name.Events ? <Styled.EventIcon /> : <Styled.ParticipantsIcon />}
        <Styled.CardHeaderLine />
      </Styled.CardHeader>

      <Styled.CardBody>
        <PainelBody type={PainelState} handleType={handlePainelState} scheduleSend={scheduleSend}/>
      </Styled.CardBody>
    </Styled.Container>
  )
}

export default Painel
