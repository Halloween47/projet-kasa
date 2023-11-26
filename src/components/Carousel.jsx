import { useParams } from 'react-router-dom'
import { useState } from 'react'

import imgLogement from '../assets/bannerImg.png'
import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'

import datas from '../datas/datas.json'
import LogementInfos from './LogementInfos'
import { logDOM } from '@testing-library/react'

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const idEnCours = useParams()
  const idDuLogementEnCours = idEnCours.idLogement

  const datasDuLogementEnCours = datas.find(
    (datasLogement) => datasLogement.id === idDuLogementEnCours,
  )
  const datasPictures = datasDuLogementEnCours.pictures
  const totalImages = datasPictures.length
  const picturesWithIndex = datasPictures.map((picture, index) => ({
    index: index,
    url: picture,
  }))

  function clicSurFlecheDroite() {
    console.log('clic sur droite')
    if (currentImageIndex < totalImages - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    } else {
      setCurrentImageIndex(0)
    }
  }
  function clicSurFlecheGauche() {
    console.log('clic sur gauche')
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    } else {
      setCurrentImageIndex(totalImages - 1)
    }
  }

  const afficherFleches = totalImages > 1

  return (
    <div className="carousel">
      {afficherFleches && (
        <div className="carouselLeft">
          <img src={arrowLeft} alt="arrow_left" onClick={clicSurFlecheGauche} />
        </div>
      )}
      <img
        src={
          picturesWithIndex[currentImageIndex] &&
          picturesWithIndex[currentImageIndex].url
        }
        alt=""
      />
      {totalImages > 1 && (
        <div className="numerotation">
          {currentImageIndex + 1}/{totalImages}
        </div>
      )}
      {afficherFleches && (
        <div className="carouselRight">
          <img
            src={arrowRight}
            alt="arrow_right"
            onClick={clicSurFlecheDroite}
          />
        </div>
      )}
    </div>
  )
}

export default Carousel
