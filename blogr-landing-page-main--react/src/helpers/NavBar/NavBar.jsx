import React from 'react'
import './NavBar.scss'
import LogoImg from '../LogoImg/LogoImg'
import HeaderBtn from '../NavBarBtns/NavBarBtns'

function NavBar() {
    let navBarBtns = [ 'Product', 'Company', 'Connect']

    return (
        <nav className='navBar'>

            <LogoImg/>

            <ul className='navBar__btns_list'>
                {navBarBtns.map((btnTitle) => (
                    <li key={btnTitle} className='navBar__btn'>
                        <HeaderBtn btnTitle={btnTitle}/>
                    </li>
                ))}
            </ul>

            <div className='navBar__links'>
                <a href="##" className='navBar__login'>Login</a>
                <a href="##" className='navBar__sign-up header-link'>Sign Up</a>
            </div>

        </nav>
    )
}

export default NavBar