import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import PokedexScreen from './components/pokedex/PokedexScreen'
import { useState } from 'react'
import SpecificPokémon from './components/pokedex/SpecificPokémon'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  //darkMode
  const [darkMode, setDarkMode] = useState(true)

  const toggleVisualMode = () => {
    setDarkMode(!darkMode)
  }

  //Comprobación
  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className={darkMode ? 'App-dark' : 'App'}>
      <Routes>
        <Route path='/' element={<Home
          darkMode={darkMode}
          toggleVisualMode={toggleVisualMode}
          setIsLogged={setIsLogged}
        />} />

        <Route element= {<ProtectedRoutes  
        isLogged={isLogged}
        />}>
          <Route path='/pokedex' element={<PokedexScreen
            darkMode={darkMode}
            toggleVisualMode={toggleVisualMode}
          />} />
          <Route path='/pokedex/:name' element={<SpecificPokémon
            darkMode={darkMode}
            toggleVisualMode={toggleVisualMode}
          />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App