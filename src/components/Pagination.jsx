import React from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Pagination = ({ arrayPages, currentPage, setCurrentPage, quantityPages, pagesPerBlock, darkMode }) => {

    const prevPage = () => {
        if (currentPage - 1 === 0) {
            setCurrentPage(quantityPages)
        } else {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage + 1 > quantityPages) {
            setCurrentPage(1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    const selectPage = n => setCurrentPage(n)

    return (
        <div className='pagination__container'>
            <button onClick={prevPage} className='pagination__prev-next'>‹</button>
            <ul className='pagination__number-container'>
                {

                    arrayPages?.map(num => (
                        <li onClick={() => selectPage(num)} key={num} className={currentPage == num ? 'page-number page-active' : 'page-number'}>{num}</li>
                    ))
                }
            </ul>
            <button onClick={nextPage} className='pagination__prev-next'>›</button>
        </div>
    )
}

export default Pagination