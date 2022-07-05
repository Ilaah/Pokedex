import React from 'react'
import VisualModes from './VisualModes'

const Header = ({ toggleVisualMode, darkMode }) => {
  return (
    <header className={darkMode ? 'header-dark' : 'header-light'}>
      <nav className='navbar'>
        <img src="./src/pokedex_logo.png" alt="pokedex" className='navbar__pokedex-logo' />
        <VisualModes 
        darkMode={darkMode}
        toggleVisualMode= {toggleVisualMode}
        />
      </nav>
    </header>
  )
}

export default Header