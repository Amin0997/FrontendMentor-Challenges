import React from 'react'
import './Header.scss'
import NavBar from '../../helpers/NavBar/NavBar'

function Header() {
    return (
        <header className="header">

            <NavBar/>

            <h2 className="header__title">A modern publishing platform</h2>
            <p className="header__subtitle">Grow your audience and build your online brand</p>

            <div className='header__links'>
                    <a href="##" className='header__start-for-free header-link'>Start for Free</a>
                    <a href="##" className='header__learn-more header-link'>Learn More</a>
            </div>

        </header>
    )
}

export default Header