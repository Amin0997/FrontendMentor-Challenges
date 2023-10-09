import './styles/reset.css'
import './styles/common.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

    return (
        <div className='wrapper min-h-screen flex flex-col items-center font-semibold bg-slate-200'>
            <Header/>

            <Main/>

            <Footer/>
        </div>
    )
}

export default App
