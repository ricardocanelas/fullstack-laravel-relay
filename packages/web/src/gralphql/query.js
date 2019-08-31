import graphql from 'babel-plugin-relay/macro'

export const ME_QUERY = graphql`
  query queryAuthContextQuery {
    me {
      id
      email
    }
  }
`

export const USERS_QUERY = graphql`
  query queryUsersPageQuery($first: Int!) {
    users(first: $first) {
      edges {
        node {
          id
          name
          email
        }
        cursor
      }
    }
  }
`
