import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../shared/styles/theme'
import Routes from './components/routes/Routes'
/* import { ConnectedRouter } from "connected-react-router"; */
import Alert from '../../shared/components/Alert'
import { authStart } from '../../logic/actions/user.actions'

export const ServiceContext = React.createContext({})

interface Props {}

interface StateProps {
  authStart: () => any
}

const App: React.FC<Props & StateProps> = ({ authStart }) => {
  useEffect(() => {
    authStart()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <ServiceContext.Provider value={[1, 2, 3, 4, 5]}>
        <Alert />
        <Routes />
      </ServiceContext.Provider>
    </ThemeProvider>
  )
}

export default connect(null, { authStart })(App)
