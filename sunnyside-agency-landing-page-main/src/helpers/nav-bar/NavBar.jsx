import { useRef,React} from 'react'
import './navBar.scss'

function NavBar() {
    const navRef= useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('show-menu')
    }

    return (
    <nav className='nav-bar'>
        <ul ref={navRef} className='header__links'>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">contact</a></li>
        </ul>


        <div className="burger_btn" onClick={showNavbar}>
            <span></span>
        </div>
    </nav>
    )
}

export default NavBar
