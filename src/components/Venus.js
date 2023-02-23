import React from 'react'
import venusPicFull from '../starter-code/assets/planet-venus.svg'
function Venus() {
  return (
    <div className='planet-container'>
    <div className='planet'>
        <img src={venusPicFull}/>
        <h1>Venus</h1>
    </div>
    </div>
  )
}

export default Venus