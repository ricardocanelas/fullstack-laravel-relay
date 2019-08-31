import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

const Header = () => {
  const { user, logout } = useAuth()
  return (
    <div>
      <nav>
        {user && (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li className="btn btn-link" onClick={logout}>
              Logout
            </li>
            <div className="pull-right">User: {JSON.stringify(user)}</div>
          </>
        )}
        {!user && (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </nav>
    </div>
  )
}

export default Header
