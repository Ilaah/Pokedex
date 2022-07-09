import React from 'react'
import Login from './Login'

const Home = ({setIsLogged}) => {
  return (
    <div className='home'>
      <img src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png" alt="Pokedex Logo" className='home__top-img' />
      <h3 className='home__greeting'>¡Hi, trainer!</h3>
      <h4 className='home__instruction'>Type your nickname below</h4>
      <Login 
      setIsLogged={setIsLogged}
      />
    </div>
  )
}

export default Home