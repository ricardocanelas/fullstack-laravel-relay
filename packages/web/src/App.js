import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useAuth } from './contexts/authContext'
import PrivateRoute from './components/PrivateRoute'
import Header from './components/Header'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import UsersPage from './pages/UsersPage'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login/" component={LoginPage} />
        <PrivateRoute path="/users/" component={UsersPage} />
      </Switch>
    </div>
  )
}

const LoadingApp = () => {
  const { firstAttemptFinished } = useAuth()

  if (firstAttemptFinished) return <App />
  return <div>Checking authentication..</div>
}

export default LoadingApp
