import React from 'react'

const Destination = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <p className="head-1">Ready to get started? Enter your travel destination</p>
          <p className="head-2">Know your visa process • Get document checklist • FREE Sign up!</p>
          <div className="destination">
            <div>
              <input type="text" placeholder="Where to, captain?" value="" />
            </div>
          </div>
        </div>
        <div className="fast">
          <div className="fast-1">
            <span>Faster than 10-min <br />grocery delivery</span>
          </div>
          <div className="fast-2">
            <span>Safer than a <br />state-run bank</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
