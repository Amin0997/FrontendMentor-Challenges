import NavBar from '../../helpers/NavBar'
import './Header.scss'

function Header() {
    return (
        <header className="header">
            <NavBar/>

            <h2 className='header__title'>Immersive experiences that deliver</h2>
        </header>
    )
}

export default Header