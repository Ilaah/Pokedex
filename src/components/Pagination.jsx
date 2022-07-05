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
        <div className={ darkMode ? 'pagination__container-dark animate__fadeInDown' : 'pagination__container-light animate__fadeInDown' }>
            <button onClick={prevPage} className={ darkMode ? 'pagination__prev-dark' : 'pagination__prev-light' }>‹</button>
            <ul className='pagination__number-container'>
                {

                    arrayPages?.map(num => (
                        <li onClick={() => selectPage(num)} key={num} className={(currentPage == num ?
                            darkMode ? 'page-number page-active-dark' :
                            'page-number page-active-light' : 'page-number')}>{num}</li>
                    ))
                }
            </ul>
            <button onClick={nextPage} className={ darkMode ? 'pagination__next-dark' : 'pagination__next-light' }>›</button>
        </div>
    )
}

export default Pagination