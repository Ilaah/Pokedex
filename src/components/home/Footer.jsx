import React from 'react'

const Footer = ({darkMode}) => {
  return (
    <footer className= {darkMode ? 'footer-dark' : 'footer-light'}>
        <button className='footer-git'>Ícono de github</button>
        <div className='footer__social-media'>
            <a href="">Instagram</a>
            <a href="">LinkedIn</a>
        </div>
    </footer>
  )
}

export default Footer