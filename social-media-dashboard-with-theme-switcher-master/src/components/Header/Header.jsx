import MainCard from '../../helpers/MainCard/MainCard'
import ModeSwitchBtn from '../../helpers/ModeSwitchBtn/ModeSwitchBtn'
import './Header.scss'

function Header(props) {

    return (
        <header className="header">

            <section className="title-and-switch">
                <title className="title">
                <h1 className='main-title'>Social Media Dashboard</h1>
                <p className='followers-counter'>Total Followers: 23, 004</p>
            </title>

            <ModeSwitchBtn onThemeChange={props.onThemeChange} />

            </section>

            <section className="cards-section">

                <MainCard/>

            </section>

        </header>
    ) 
}

export default Header
