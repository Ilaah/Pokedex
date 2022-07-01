import React from 'react'
import Login from './Login'

const Home = () => {
  return (
    <div className='home'>
      <img src="\src\Pokedex_logo.png" alt="Pokedex Logo" className='home__top-img'/>
      <h3 className='home__greeting'>¡Hi, trainer!</h3>
      <h4 className='home__instruction'>Type your nickname below</h4>
      <Login />
    </div>
  )
}

export default Home