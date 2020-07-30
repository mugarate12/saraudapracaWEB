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

export default function Navigator() {
  return (
    <Router>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/events' component={Events} />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}
