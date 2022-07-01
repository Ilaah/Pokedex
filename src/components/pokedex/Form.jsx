import React from 'react'

const Form = ({setPokeSearch, typeList, setFilterType}) => {

    const changeInputText = e => {
        setPokeSearch(e.target.value)
    }

    const changeSelect = e => {
        setFilterType(e.target.value)
    }

  return (
    <form className='inputs__container'>
        <input 
        className='input__search'
        type="text"
        placeholder='Search your favorite Pokemon'
        onChange={changeInputText}
        />
        <select onChange={changeSelect} className= 'input__filter'>
            <option value="All Pokemons" className='input__filter-options'>All Pokemons</option>
            {
                typeList?.map(type => (
                    <option className='input__filter-options' key={type.name} value={type.name}> {type.name} </option>
                ))
            }
        </select>
    </form>
  )
}

export default Form