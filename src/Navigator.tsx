import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global'
import DefaultTheme from './styles/themes/default'

import Home from './pages/Home/index'
import Events from './pages/Events/index'
import EventList from './pages/EventsList/index'
import Schedule from './pages/Schedule/index'
import AdminCreate from './pages/AdminCreate/index'
import AdminConfig from './pages/AdminConfig/index'

export default function Navigator() {
  return (
    <Router>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/events/create' component={Events} />
          <Route path='/events/list' component={EventList} />
          <Route path='/schedule/view' >
            <Schedule scheduleView />
          </Route>
          <Route path='/schedule/send' >
            <Schedule scheduleSend />
          </Route>
          <Route path='/schedule/create' >
            <Schedule scheduleCreate />
          </Route>
          <Route path='/admin/create' component={AdminCreate} />
          <Route path='/admin/config' component={AdminConfig} />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}
