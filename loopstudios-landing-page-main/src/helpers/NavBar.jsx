import { useState } from 'react'
import logo from '../images/logo.svg'
import { navItems } from './NavItems'
import burgerMenu from '../images/icon-hamburger.svg'
import closeMenuSvg from '../images/icon-close.svg'

function NavBar() {
    const [isActive, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!isActive);
    };

    return (
        <nav className={`flex items-center justify-between transition-all ease-out
        ${isActive ? 'nav__mobile_active' : 'max-md:left-[-50%]'}`}>
            <a href="##" className='max-md:absolute'><img src={logo} alt="" /></a>

            <ul className={`flex gap-x-[32px] text-white font-Alata capitalize text-[15px] font-normal leading-6 transition-all ease-in-out
            ${isActive ? 'nav__mobile_active-list' : 'max-md:left-[-50%] max-md:hidden'}`}>
                {navItems.map(({ link, href }) => (
                    <li key={link} className={`nav__mobile_active-list_item ${isActive ? 'active' : ''}`}>
                        <a href={href}>{link}</a>
                    </li>
                ))}
            </ul>

            <button className='hidden max-md:absolute max-md:flex max-md:left-[88%]' onClick={toggleMenu}>
                <img src={isActive ? closeMenuSvg : burgerMenu} alt="" />
            </button>
        </nav>
    )
}

export default NavBar
