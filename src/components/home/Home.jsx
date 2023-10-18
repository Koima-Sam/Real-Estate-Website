import React from 'react'
import Hero from './hero/Hero'
import Featured from './featured/Featured'
import Recent from './recent/Recent'
import Awards from './awards/Awards'

const Home = () => {
  return (
    <div>
    <Hero />
    <Featured />
    <Recent />
    <Awards />
    </div>
  )
}

export default Home