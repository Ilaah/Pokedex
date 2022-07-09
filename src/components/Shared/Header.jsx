import React from 'react'
import VisualModes from '../home/VisualModes'

const Header = ({ toggleVisualMode, darkMode }) => {
  return (
    <header className={darkMode ? 'header-dark' : 'header-light'}>
      <nav className='navbar'>
        <img src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png" alt="pokedex" className='navbar__pokedex-logo' />
        <VisualModes 
        darkMode={darkMode}
        toggleVisualMode= {toggleVisualMode}
        />
      </nav>
    </header>
  )
}

export default Header