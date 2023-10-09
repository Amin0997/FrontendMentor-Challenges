import './Header.css'

function Header() {
    return (
        <header className="header flex flex-col justify-center items-center h-64 mt-5">
            <h2 className="font-extrabold text-blue-950 text-3xl ">Simple, traffic-based pricing</h2>
            <p className=" mt-4 opacity-40 tracking-tight">Sing-up for our 30-day trial. No credit card required.</p>
        </header>
    )
}

export default Header