import React from 'react'
import Hero from './hero/Hero'
import Featured from './featured/Featured'
import Recent from './recent/Recent'
import Awards from './awards/Awards'
import Locations from './locations/Locations'
import Team from './team/Team'

const Home = () => {
  return (
    <div>
    <Hero />
    <Featured />
    <Recent />
    <Awards />
    <Locations />
    <Team />
    </div>
  )
}

export default Home