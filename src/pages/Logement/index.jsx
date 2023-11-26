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
