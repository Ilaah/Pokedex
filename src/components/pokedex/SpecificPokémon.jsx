import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import Header from '../home/Header'

const SpecificPokémon = ({ darkMode, toggleVisualMode }) => {

    const { name } = useParams()
    const [specificPokémon, setSpecificPokémon] = useState()

    const URL_Pokemon = `https://pokeapi.co/api/v2/pokemon/${name}/`

    useEffect(() => {
        axios.get(URL_Pokemon)
            .then(res => setSpecificPokémon(res.data))
    }, [])

    const specificPokemonType = specificPokémon?.types[0].type.name
    const specificPokemonType2 = specificPokémon?.types[1]?.type.name

    const specificPokemonSkill = specificPokémon?.abilities[0].ability.name
    const specificPokemonSkill2 = specificPokémon?.abilities[1]?.ability.name
    const specificPokemonSkill3 = specificPokémon?.abilities[2]?.ability.name

    const filterTypePokemon = () => {
        if (specificPokemonType === 'poison') { return 'poison' } else {
            if (specificPokemonType === 'rock') { return 'rock' } else {
                if (specificPokemonType === 'ghost') { return 'ghost' } else {
                    if (specificPokemonType === 'fire') { return 'fire' } else {
                        if (specificPokemonType === 'water') { return 'water' } else {
                            if (specificPokemonType === 'grass') { return 'grass' } else {
                                if (specificPokemonType === 'electric') { return 'electric' } else {
                                    if (specificPokemonType === 'ice') { return 'ice' } else {
                                        if (specificPokemonType === 'dark') { return 'dark' } else {
                                            if (specificPokemonType === 'fairy') { return 'fairy' } else {
                                                if (specificPokemonType === 'shadow') { return 'shadow' } else {
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

    return (
            <article className='specific__pokemon'>
                <Header
                    toggleVisualMode={toggleVisualMode}
                    darkMode={darkMode}
                />
                <section className={`specific__pokemon-card ${filterTypePokemon()}`}>
                    <img className='specific__pokemon-img' src={specificPokémon?.sprites.other['official-artwork'].front_default} alt="" />

                    <div className={darkMode ? 'specific__pokemon-info-dark' : 'specific__pokemon-info-light'}>
                        <h2 className={`specific__pokemon-name ${filterTypePokemon()}`}>{specificPokémon?.name}</h2>

                        <div className='specific__pokemon-weight-height'>
                            <div className='specific__pokemon-wh'>
                                <p>Weight</p>
                                <h3> {specificPokémon?.weight} </h3>
                            </div>
                            <div className='specific__pokemon-wh'>
                                <p>Height</p>
                                <h3> {specificPokémon?.height} </h3>
                            </div>
                        </div>

                        <section className='specific__pokemon-types-skills'>
                            <div className='specific__pokemon-types-box'>
                                <p className='specific__pokemon-types'>Types</p>

                                <div className='specific__pokemon-types-separator'>
                                    <div className={`specific__pokemon-type ${filterTypePokemon()}`}> {specificPokemonType}</div>

                                    {(specificPokemonType2 ?
                                        <div className={`specific__pokemon-type ${filterTypePokemon()}`}> {specificPokemonType2}</div> :
                                        null)}
                                </div>

                            </div>

                            <div className='specific__pokemon-skills-box'>
                                <p className='specific__pokemon-skills'>Skills</p>

                                <div className='specific__pokemon-skills-separator'>
                                    <div className='specific__pokemon-skill'> {specificPokemonSkill} </div>

                                    {(specificPokemonSkill2 ?
                                        <div className='specific__pokemon-skill'> {specificPokemonSkill2} </div> :
                                        null)
                                    }

                                    {(specificPokemonSkill3 ?
                                        <div className='specific__pokemon-skill'> {specificPokemonSkill3} </div> :
                                        null)
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </article>
    )
}

export default SpecificPokémon