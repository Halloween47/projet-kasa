import { Link } from 'react-router-dom'
<<<<<<< HEAD
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
=======
import logo from "../assets/logo.svg";
 
function Header() {
    return (
        <div className='header'>

        <img src={logo}></img>
        <nav>
            <Link to="/" className="custom-link">Accueil</Link>
            <Link to="/about" className="custom-link">A Propos</Link>
        </nav>

        </div>
    )
}

export default Header
>>>>>>> 46b668e417d3992850781c4e928e945dc3a7ab78
