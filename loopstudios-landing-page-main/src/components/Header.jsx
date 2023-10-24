import NavBar from '../helpers/NavBar'

function Header() {
    return (
        <header className="bg-blend-multiply bg-top bg-cover w-full min-h-[650px] bg-slate-400 bg-headerBgDesktop px-[11.5%] py-[4.5%] text-white
                            max-md:pt-10">
            <NavBar/>

            <h2 className='max-w-[650px] h-[278px] p-10 uppercase mt-[130px] text-[72px] font-light leading-[65px] border-2 border-white flex items-center
                            max-md:text-5xl max-sm:text-4xl max-sm:p-6'
            >Immersive experiences that deliver</h2>
        </header>
    )
}

export default Header