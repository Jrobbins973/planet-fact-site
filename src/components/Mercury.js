import React from 'react'
import planetData from '../starter-code/data.json'
import mercuryPicFull from "../starter-code/assets/planet-mercury.svg"



function Mercury() {
  return (
    <div className='planet-container'>
    <div className='planet'>
      <img src={mercuryPicFull}/>
      <h1>MERCURY</h1>
      <p>{planetData[0].structure.content}</p>
  </div>
    </div>
  )
}

export default Mercury