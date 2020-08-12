import React from 'react'

import Header from './../../components/Header/index'
import Painel from './../../components/Painel/index'

import * as Styled from './styles'

enum Name {
  Events = 'Events',
  Participants = 'Participants',

}


interface ScheduleProps {
  scheduleView?: boolean;
  scheduleSend?: boolean;
  scheduleCreate?: boolean;
}

const Schedule: React.FC<ScheduleProps> = ({ scheduleView, scheduleSend, scheduleCreate }) => {
  return (
    <Styled.Container>
      <Header haveMenu={true} />

      <Styled.ContentContainer>
        <Painel PainelName={Name.Events} scheduleView={scheduleView} scheduleSend={scheduleSend} scheduleCreate={scheduleCreate} />
      </Styled.ContentContainer>
    </Styled.Container>
  )
}

export default Schedule
