import React from 'react'
import Sidebar from './Sidebar'

const Pricing = () => {
  return (
    <div>
    <div className="container">
        <div className="price-1">
            <Sidebar />
        </div>
        <div className="price-2">
            <h1 className='head'>Pricing</h1>
            <p>
                Teleport charges service fee between <b>₹499 - ₹2499</b> for visa applications.<br />
                Over and above the service fee, Travelers will have to pay visa fees<br />
                levied by the respective embassy for granting a visa.
            </p>
        </div>
    </div>
    </div>
  )
}

export default Pricing
