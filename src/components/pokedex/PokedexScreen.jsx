import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from './PokeCard'
import Header from '../Shared/Header'
import Pagination from '../Pagination'
import Footer from '../Shared/Footer'
import Form from './Form'
import axios from 'axios'

const PokedexScreen = ({ darkMode, toggleVisualMode }) => {

    const nameUser = useSelector(state => state.nameUser)

    //Establecimiento de los pokemons en una constante
    const [pokemons, setPokemons] = useState()

    //Input search
    const [pokeSearch, setPokeSearch] = useState()
    const [filterPokemon, setFilterPokemon] = useState()

    //Filter
    const [typeList, setTypeList] = useState()
    const [filterType, setFilterType] = useState('All Pokemons')


    useEffect(() => {
        if (filterType === 'All Pokemons') {
            const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1133'
            axios.get(URL_POKEMONS)
                .then(res => { setPokemons(res.data.results) })
                .catch(err => console.log(err))
        } else {
            const URL = `https://pokeapi.co/api/v2/type/${filterType}/`
            axios.get(URL)
                .then(res => {
                    const array = res.data.pokemon.map(e => e.pokemon)
                    setPokemons(array)
                })
                .catch(err => console.log(err))
        }
    }, [filterType])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypeList(res.data.results))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setFilterPokemon(pokemons?.filter(e => e.name.includes(pokeSearch.toLowerCase())))
    }, [pokeSearch])

    //Paginación
    const [currentPage, setCurrentPage] = useState(1)
    let arrayPokemons = []
    const pokemonsPerPage = 15
    if (pokemons?.length < pokemonsPerPage) {
        arrayPokemons = [...pokemons]
    } else {
        const lastPokemon = currentPage * pokemonsPerPage
        arrayPokemons = pokemons?.slice(lastPokemon - pokemonsPerPage, lastPokemon)
    }

    let arrayPages = []
    let quantityPages = Math.ceil(pokemons?.length / pokemonsPerPage)
    const pagesPerBlock = 5
    let currentBlock = Math.ceil(currentPage / pagesPerBlock)
    if (currentBlock * pagesPerBlock >= quantityPages) {
        for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++) {
            arrayPages.push(i)
        }
    } else {
        for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++) {
            arrayPages.push(i)
        }
    }

    return (
        <div className='pokedex'>
            <Header
                toggleVisualMode={toggleVisualMode}
                darkMode={darkMode}
            />
            <Form
                setPokeSearch={setPokeSearch}
                typeList={typeList}
                setFilterType={setFilterType}
            />
            <h3 className='pokedex__greeting'>Hi trainer {nameUser}, welcome to the pokedex</h3>
            <p>Here you will find your favorite pokemons</p>
            <Pagination
                arrayPages={arrayPages}
                darkMode={darkMode}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                quantityPages={quantityPages}
                pagesPerBlock={pagesPerBlock}
            />
            <section className='pokecards animate__fadeInLeft'>
                {filterPokemon ?
                    filterPokemon?.map(pokemon => (
                        <PokeCard
                            key={pokemon.url}
                            url={pokemon.url}
                            darkMode={darkMode}
                        />
                    ))
                    :
                    arrayPokemons?.map(pokemon => (
                        <PokeCard
                            key={pokemon.url}
                            url={pokemon.url}
                            darkMode={darkMode}
                        />
                    ))
                }
            </section>
            <Pagination
                arrayPages={arrayPages}
                darkMode={darkMode}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                quantityPages={quantityPages}
                pagesPerBlock={pagesPerBlock}
            />
            <Footer
                darkMode={darkMode}
            />
        </div>
    )
}

export default PokedexScreen