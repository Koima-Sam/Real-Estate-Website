import React from 'react'
import Back from '../common/header/Back'
import PriceCard from '../home/price/PriceCard'
import img from '../images/pricing.jpg'
const Pricing = () => {
  return (
    <>
    <section className="services mb">
        <Back name="30 days money back guarantee" title="No Extra Fees. Friendly Support 24/7" cover={img}/>
        <div className="container price">
            <PriceCard />
        </div>
    </section>
    </>
  )
}

export default Pricing