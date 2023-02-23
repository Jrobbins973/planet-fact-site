import React, {useState} from 'react'
import planetData from '../starter-code/data.json'
import earthPicFull from '../starter-code/assets/planet-earth.svg'
import earthPicInternal from "../starter-code/assets/planet-earth-internal.svg"
import earthPicGeology from "../starter-code/assets/geology-earth.png"

function Earth() {

  const [earthPic, setEarthPic] = useState(earthPicFull)
  const [showGeologyPic, setShowGeologyPic] = useState(false)

  return (
    <div className='planet'>
      <img src={earthPic}/>
      { showGeologyPic ? <img className='planet__geology' src={earthPicGeology}/> : null}
    <h1>Earth</h1>
    <p>{planetData[2].overview.content}</p>
    <p className='planet__source'>Source :  <a href={planetData[2].overview.source}>Wikipedia</a></p>

    <div className='planet__view-selectors'>
      <a onClick={() => setEarthPic(earthPicFull)}>01 | OVERVIEW</a>
      <a onClick={() => setEarthPic(earthPicInternal)}>02 | INTERNAL STRUCTURE</a>
      <a onClick={() => setShowGeologyPic(!showGeologyPic)}>03 | SURFACE GEOLOGY</a>
    </div>
  </div>
  )
}

export default Earth