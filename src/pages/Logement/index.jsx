<<<<<<< HEAD
import React from 'react';
import { useParams, Navigate } from 'react-router-dom'
import datas from '../../datas/datas.json'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slideshow from '../../components/Slideshow'

function Logement() {
  const { idLogement } = useParams();

  const currentLogement = datas.find((logement) => logement.id === idLogement);

  if (!currentLogement) {
    return <Navigate to="/notfound" />;
  }

  return (
    <>
      <Header />
      <Slideshow idLogement={idLogement} />
      <Footer />
    </>
  );
}

export default Logement
=======
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
>>>>>>> 46b668e417d3992850781c4e928e945dc3a7ab78
