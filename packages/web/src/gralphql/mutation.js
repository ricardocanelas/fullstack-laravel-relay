import graphql from 'babel-plugin-relay/macro'

export const LOGIN_MUTATION = graphql`
  mutation mutationAuthContextLoginMutation($data: LoginInput) {
    login(data: $data) {
      access_token
      user {
        id
        email
      }
    }
  }
`

export const LOGOUT_MUTATION = graphql`
  mutation mutationAuthContextLogoutMutation {
    logout {
      message
    }
  }
`
