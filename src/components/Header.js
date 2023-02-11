import React from 'react'
import {useHistory} from 'react-router-dom'


function Header() {
    const history = useHistory()


  return (
    <div>
        <div className = 'header'>
        <h1>THE PLANETS</h1>





        <p onClick={() => history.push("/")}>MERCURY</p>
        <p onClick={() => history.push("/venus")}>VENUS</p>
        <p onClick={() => history.push("/earth")}>EARTH</p>
        <p onClick={() => history.push("/mars")}>MARS</p>
        <p onClick={() => history.push("/jupiter")}>JUPITER</p>
        <p onClick={() => history.push("/saturn")}>SATURN</p>
        <p onClick={() => history.push("/uranus")}>URANUS</p>
        <p onClick={() => history.push("/neptune")}>NEPTUNE</p>
        

        </div>
    </div>
  )
}

export default Header