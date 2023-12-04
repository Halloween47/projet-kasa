import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import datas from '../../datas/datas.json'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import LogementInfos from '../../components/LogementInfos'
import Carousel from '../../components/Carousel'
// import Slideshow from '../../components/Slideshow'
import NotFound from '../NotFound'

// import '../../style.css'


import { BrowserRouter as Router, Route, Switch, Navigate } from 'react-router-dom';


function Logement() {
  const navigate = useNavigate()
  let  {idLogement}  = useParams()

  let currentLogement = datas.find((logement) => logement.id === idLogement)

  // useEffect(() => {

// alert("couco")


// if (!currentLogement) {
//   //     navigate('/error', { replace: true});
//   // alert("couco")
//   // return <Navigate to="/404" replace/>;
//   return (
//         <NotFound />
//   )
//     }
  // }, 
  // [currentLogement, idLogement])
  // // [])

  return currentLogement ? (
    <>
      <Header />
      <div className="slideshow">
        {/* <Slideshow /> */}
        <Carousel />
        <LogementInfos idLogement={idLogement} />
      </div>
      <Footer />
    </>
  ) : (
    <NotFound />
  )
}

export default Logement
