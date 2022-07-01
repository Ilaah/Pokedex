import React from 'react'

const Header = ({ toggleVisualMode, darkMode }) => {
  return (
    <header className= {darkMode ? 'header-dark' : 'header-light'}>
      <nav className='navbar'>
        <img src="./src/pokedex_logo.png" alt="pokedex" className='navbar__pokedex-logo' />
        <button onClick={toggleVisualMode} className={darkMode ? 'navbar__btn-dark' : 'navbar__btn-light'}>
          {
            darkMode ?
              <i className="fa-solid fa-moon"></i> :
              <i className="fa-solid fa-sun"></i>
          }
        </button>
      </nav>
    </header>
  )
}

export default Header