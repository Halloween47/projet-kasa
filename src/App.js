import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Logement from './pages/Logement'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
<<<<<<< HEAD
        <Route path="/logement/:idLogement" element={<Logement />} />
=======
        <Route path="/logement" element={<Logement />} />
>>>>>>> 46b668e417d3992850781c4e928e945dc3a7ab78
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
