import React from 'react'

const Footer = ({darkMode}) => {
  return (
    <footer className= {darkMode ? 'footer-dark' : 'footer-light'}>
        <a href='https://github.com/Ilaah' className={darkMode ? 'footer__icon-dark' : 'footer__icon-light'} target= '_blank'> <i className="fa-brands fa-github"></i> </a>
        <div className='footer__social-media'>
            <a href="https://www.linkedin.com/in/julio-enrique/" className={darkMode ? 'footer__icon-dark' : 'footer__icon-light'} target= '_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:julio4003@hotmail.com" className={darkMode ? 'footer__icon-dark' : 'footer__icon-light'} target= '_blank'><i className="fa-solid fa-envelope"></i></a>
        </div>
    </footer>
  )
}

export default Footer