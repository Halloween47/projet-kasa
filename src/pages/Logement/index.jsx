import { Link } from 'react-router-dom'

function Logement() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/logement">Logement</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Logement
