import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import PokedexScreen from './components/pokedex/PokedexScreen'
import Header from './components/home/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SpecificPokémon from './components/pokedex/SpecificPokémon'

function App() {

  //darkMode
  const [darkMode, setDarkMode] = useState(false)

  const toggleVisualMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className= {darkMode ? 'App-dark' : 'App'}>
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/pokedex' element={<PokedexScreen
        darkMode={darkMode}
        toggleVisualMode={toggleVisualMode}
        />}/>
        <Route path='/pokedex/:name' element={<SpecificPokémon
        darkMode={darkMode}
        toggleVisualMode= {toggleVisualMode}
        />} />
      </Routes>
    </div>
  )
}

export default App