import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ url, darkMode }) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  const pokemonType = pokemon?.types[0].type.name
  const pokemonType2 = pokemon?.types[1]?.type.name

  const filterTypePokemon = () => {
    if (pokemonType === 'poison') { return 'poison' } else {
      if (pokemonType === 'rock') { return 'rock' } else {
        if (pokemonType === 'normal') { return 'normal' } else {
          if (pokemonType === 'fighting') { return 'fighting' } else
            if (pokemonType === 'bug') { return 'bug' } else {
              if (pokemonType === 'steel') { return 'steel' } else {
                if (pokemonType === 'psychic') { return 'psychic' } else {
                  if (pokemonType === 'ghost') { return 'ghost' } else {
                    if (pokemonType === 'fire') { return 'fire' } else {
                      if (pokemonType === 'water') { return 'water' } else {
                        if (pokemonType === 'grass') { return 'grass' } else {
                          if (pokemonType === 'electric') { return 'electric' } else {
                            if (pokemonType === 'ice') { return 'ice' } else {
                              if (pokemonType === 'dark') { return 'dark' } else {
                                if (pokemonType === 'fairy') { return 'fairy' } else {
                                  if (pokemonType === 'shadow') { return 'shadow' } else {
                                    return 'default'
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
        }
      }
    }
  }

  const navigate = useNavigate()

  const clickCard = () => navigate(`/pokedex/${pokemon.name}`)


  return (
    <article className={`pokecard animate__fadeInLeft ${filterTypePokemon()}`} onClick={clickCard}>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon" className='pokecard__img' />

      <div className={darkMode ? 'pokecard__info-dark' : 'pokecard__info-light'}>
        <h2 className={darkMode ? 'pokecard__name-dark' : 'pokecard__name-light'}> {pokemon?.name} </h2>
        <p>Types</p>
        <h3 className={darkMode ? 'pokecard__type-dark' : 'pokecard__type-light'} >
          {pokemonType}  {pokemonType2 ? '/' + pokemonType2 : null}</h3>

        <div className={darkMode ? 'pokecard__stats-dark' : 'pokecard__stats-light'}>
          <ul className='pokecard__separator'>
            <p className='pokecard__stat'>HP</p>
            <h3>{pokemon?.stats[0].base_stat}</h3>
            <p className='pokecard__stat'>Defense</p>
            <h3>{pokemon?.stats[2].base_stat}</h3>
          </ul>

          <ul className='pokecard__separator'>
            <p className='pokecard__stat'>Attack</p>
            <h3>{pokemon?.stats[1].base_stat}</h3>
            <p className='pokecard__stat'>Speed</p>
            <h3>{pokemon?.stats[5].base_stat}</h3>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default PokeCard