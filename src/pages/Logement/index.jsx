import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slideshow from '../../components/Slideshow'

function Logement() {
  const idLogement = useParams()
  // console.log(idLogement);
  return (
    <>
      <Header />
      <Slideshow idLogement={idLogement} />
      <Footer />
    </>
  )
}

export default Logement
