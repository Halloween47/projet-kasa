import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <div className="header">
      <img src={logo}></img>
      <nav>
        <Link to="/" className="custom-link">
          Accueil
        </Link>
        <Link to="/about" className="custom-link">
          A Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
