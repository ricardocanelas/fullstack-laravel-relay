import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth()
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
