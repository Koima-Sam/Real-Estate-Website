import React from 'react'
import Back from '../common/header/Back'
import img from '../images/about.jpg'
import './about.css'
const About = () => {
  return (
    <>
    <section className="about">
        <Back name="About Us"  title="About Us - Who are We ?" cover={img}/>
        <div className="container flex mtop">
            <div className="left row">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>

                <button className="btn2">
                    More about Us
                </button>
            </div>
            <div className="right row">
                <img src={img} alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default About