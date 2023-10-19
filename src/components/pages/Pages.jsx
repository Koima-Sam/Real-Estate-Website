import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../common/header/Header'
import Home from '../home/Home'
import Footer from '../common/footer/Footer'

const Pages = () => {
  return (
    <>
     <Header /> 
      <Routes>
       
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Pages