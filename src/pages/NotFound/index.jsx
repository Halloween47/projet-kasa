<<<<<<< HEAD
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Notfound() {
  return (
    <div>
      <Header />

      <div className="pageError">
        <div className="codeError">404</div>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="link">
          Retourner sur la page d’accueil
        </Link>
      </div>

      <Footer />
    </div>
  )
}

export default Notfound
=======
export default function Notfound() {
    return(
        <h1>Page non disponible</h1>
    )
}
>>>>>>> 46b668e417d3992850781c4e928e945dc3a7ab78
