import React from 'react'
import { useQuery } from 'relay-hooks'
import { USERS_QUERY } from '../gralphql/query'

const UsersPage = () => {
  const { props, error } = useQuery({
    query: USERS_QUERY,
    variables: { first: 50 },
  })

  return (
    <div>
      <h1>All Users</h1>
      {error && <div>Ops! There's an error</div>}
      {!props && <div>Loading..</div>}

      {props &&
        props.users &&
        props.users.edges.map(item => {
          return (
            <li key={item.node.id}>
              {item.node.name} / {item.node.email}
            </li>
          )
        })}
    </div>
  )
}

export default UsersPage
