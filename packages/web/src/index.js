import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/authContext'
import { RelayEnvironmentProvider } from 'relay-hooks'
import environment from './environment'

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </RelayEnvironmentProvider>,
  document.getElementById('root')
)
