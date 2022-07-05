import React from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'

const VisualModes = ({ toggleVisualMode, darkMode }) => {
    return (
        <button onClick={toggleVisualMode} className={darkMode ? 'darkmode__btn' : 'lightmode__btn'}>
            {
                darkMode ?
                    <BsFillMoonFill className='icon-dark'/> :
                    <BsFillSunFill className='icon-light'/>
            }
        </button>
    )
}

export default VisualModes