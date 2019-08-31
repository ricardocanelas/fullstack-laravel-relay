import React from 'react'
import Cookie from 'js-cookie'
import { useQuery } from 'relay-hooks'
import { useMutation } from 'react-relay-mutation'
import { ME_QUERY } from '../gralphql/query'
import { LOGIN_MUTATION, LOGOUT_MUTATION } from '../gralphql/mutation'

const AuthContext = React.createContext()

function AuthProvider(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false)
  const [user, setUser] = React.useState(null)

  const { props: meData } = useQuery({
    query: ME_QUERY,
    variables: {},
  })

  const [loginMutation, loginProps] = useMutation(LOGIN_MUTATION, {
    onCompleted: response => {
      Cookie.set('token', response.login.access_token, { expires: 7 })
      setUser(response.login.user)
    },
    onError: () => {},
  })

  const [logoutMutation] = useMutation(LOGOUT_MUTATION)

  const logout = React.useCallback(() => {
    logoutMutation({ variables: {} })
    Cookie.remove('token')
    setUser(null)
  }, [logoutMutation])

  const login = React.useCallback(
    (email, password) => loginMutation({ variables: { data: { username: email, password } } }),
    [loginMutation]
  )

  React.useLayoutEffect(() => {
    if (meData) {
      if (!firstAttemptFinished) {
        setFirstAttemptFinished(true)
        setUser(meData.me)
      }
    }
  }, [meData, firstAttemptFinished])

  return (
    <AuthContext.Provider
      value={{ user, login, loginProps, logout, firstAttemptFinished }}
      {...props}
    />
  )
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export { AuthProvider, useAuth }
