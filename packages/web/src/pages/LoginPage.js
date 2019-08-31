import React from 'react'
import { useAuth } from '../contexts/authContext'

const LoginPage = props => {
  const [state, setState] = React.useState({
    email: 'admin@mail.com',
    password: 'password',
  })
  const {
    user,
    login,
    loginProps: { loading, error },
  } = useAuth()

  const handleChange = field => e => {
    setState({ ...state, [field]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!loading) {
      login(state.email, state.password)
    }
  }

  if (error) {
    console.log('AAAAHHHH!!!')
    console.log(error.source.errors[0].message)
    console.log(typeof error)
  }

  return (
    <div>
      <h1>Login</h1>

      {props.location.state && props.location.state.from && (
        <div>
          <div className="alert">
            To access the url <span className="bold">{props.location.state.from.pathname} </span>you
            need to be log in.
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {user && <div>You're already logged</div>}
        {!user && (
          <>
            <label>
              E-mail
              <input value={state.email} onChange={handleChange('email')} disabled={loading} />
            </label>
            <label>
              Password
              <input
                type="password"
                value={state.password}
                onChange={handleChange('password')}
                disabled={loading}
              />
            </label>
            <button type="submit" disabled={loading}>
              Login
            </button>
            {error && <span className="message">The user credentials were incorrect.</span>}
            {loading && <span className="message">Checking credential...</span>}
          </>
        )}
      </form>
    </div>
  )
}

export default LoginPage
