import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/homepage">
          <h1 id="title">Sentinelle</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button id="navlinks" onClick={handleClick} >Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login &nbsp;</Link>
              <Link to="/signup"><button id="Signup">Signup</button></Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar