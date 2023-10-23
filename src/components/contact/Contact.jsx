import React from 'react'
import Back from '../common/header/Back'
import img from '../images/pricing.jpg'
import './contact.css'
const Contact = () => {
  return (
    <>
        <section className="contact mb">
            <Back name="Contact Us" title="Get Help & Friendly Support" cover={img}/>
            <div className="container">
                <form action="" className="shadow">
                    <h4>Fill up the Form </h4>
                    <div>
                        <input type="text" placeholder='Name' name=''/>
                        <input type="email" placeholder='Email' name=''/>
                    </div>
                    <input type="text" placeholder='Subject' name=''/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Submit your Request</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default Contact