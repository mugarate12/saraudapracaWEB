import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import usePersistedState from './utils/usePersistedState'

import GlobalStyle from './styles/global'
import DefaultTheme from './styles/themes/default'
import DarkTheme from './styles/themes/dark'

import Home from './pages/Home/index'
import Events from './pages/Events/index'
import EventList from './pages/EventsList/index'
import Schedule from './pages/Schedule/index'
import AdminCreate from './pages/AdminCreate/index'
import AdminConfig from './pages/AdminConfig/index'

export const ThemeContext = React.createContext(() => {})

export default function Navigator() {
  const [theme, setTheme] = usePersistedState('theme', DefaultTheme.title)

  function toggleTheme() {
    setTheme(theme === DefaultTheme.title ? DarkTheme.title : DefaultTheme.title)
  }

  function Theme() {
    return theme === DefaultTheme.title ? DefaultTheme : DarkTheme
  }

  return (
    <Router>
      <ThemeProvider theme={Theme()}>
        <ThemeContext.Provider value={toggleTheme} >
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
        </ThemeContext.Provider>
      </ThemeProvider>
    </Router>
  )
}
