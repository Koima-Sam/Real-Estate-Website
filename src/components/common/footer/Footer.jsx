import React from 'react'
import logo from '../../images/logo-light.png'
import { footer } from '../../data/Data'
import './footer.css'
const Footer = () => {
  return (
    <>
    <section className="footerContact">
        <div className="container">
            <div className="send flex">
                <div className="text">
                    <h1>Do You Have Questions ?</h1>
                    <p>We'll help market your real estate ambitions</p>
                </div>
                <button className="btn5">Contact us Today</button>
            </div>
        </div>
    </section>
    <footer>
        <div className="container">
            <div className="box">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
              <div className="input flex">
                <input type="text" placeholder='Email Address' name='' id='' />
                <button>Subscribe</button>
              </div>
                </div>
            </div>
            {footer.map((item, index) =>(
                <div className="box" key={index}>
                    <h3>{item.title}</h3>
                    <ul>
                        {item.text.map((val,index) =>(
                            <li key={index}>{val.list}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </footer>
    <div className="legal">
        <span>© {new Date().getFullYear()} Credits to KoimaSam.</span>
    </div>
    </>
  )
}

export default Footer