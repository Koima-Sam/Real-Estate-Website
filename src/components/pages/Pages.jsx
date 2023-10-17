import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../common/header/Header'
import Home from '../home/Home'

const Pages = () => {
  return (
    <>
     <Header /> 
      <Routes>
       
        <Route exact path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default Pages