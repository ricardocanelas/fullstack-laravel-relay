import Cookie from 'js-cookie'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import RelayNetworkLogger from 'relay-runtime/lib/RelayNetworkLogger'

const endpoint = 'http://localhost:8000/graphql'

export const TOKEN_KEY = 'freenance_web_token'

export function injectAuthorization() {
  // get token from cookie or session token instead
  const token = Cookie.get('token')

  if (token === null || token === undefined) return {}

  return {
    Authorization: `Bearer ${token}`,
  }
}

function fetchQuery(operation, variables) {
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...injectAuthorization(),
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

const environment = new Environment({
  network: Network.create(RelayNetworkLogger.wrapFetch(fetchQuery, () => '')),
  store: new Store(new RecordSource()),
})

export default environment
