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
        ${isActive ? 'max-md:z-50 max-md:fixed max-md:w-screen max-md:h-screen max-md:bg-black max-md:top-0 max-md:left-0 max-md:flex-col max-md:items-start max-md:p-6 $' : 'max-md:left-[-50%]'}`}>
            <a href="##" className='max-md:absolute'><img src={logo} alt="" /></a>

            <ul className={`flex gap-x-[32px] text-white font-Alata capitalize text-[15px] font-normal leading-6 transition-all ease-in-out
            ${isActive ? 'max-md:left-0 max-md:flex-col max-md:gap-y-6 max-md:text-2xl max-md:relative max-md:top-[30%] max-md:font-light max-md:uppercase max-md:items-start' : 'max-md:left-[-50%] max-md:hidden'}`}>
                {navItems.map(({ link, href }) => (
                    <li key={link} className={`relative flex justify-center before:w-6 before:h-0.5 before:bg-white before:absolute before:top-8 before:hidden hover:before:inline-block ${isActive ? 'active' : ''}`}>
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
