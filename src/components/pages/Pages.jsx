import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../common/header/Header'
import Home from '../home/Home'
import Footer from '../common/footer/Footer'
import About from '../about/About'

const Pages = () => {
  return (
    <>
     <Header /> 
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Pages