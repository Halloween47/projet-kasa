import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

import Navigation from './Navigation'

function Header() {
  return (
    <div className="header">
      <Navigation />
      <img src={logo} alt='Logo'></img>
      <nav>
        {/* <Link to="/" className="custom-link">
          Accueil
        </Link> */}
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Accueil
        </Link>
        {/* <Link to="/about" className="custom-link">
          A Propos
        </Link> */}
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          A Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
