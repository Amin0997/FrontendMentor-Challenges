import './Footer.scss'
import checkImg from '../../assets/images/icon-check.svg'

function Footer() {
    return (
        <footer className="footer flex w-[540px] h-[135px] pl-12 pt-8 bg-white rounded-b-lg">
            <section className="provisions">
                <p><img src={checkImg} alt="" />Unlimited websites</p>
                <p className='my-2'><img src={checkImg} alt="" />100% data ownership</p>
                <p><img src={checkImg} alt="" />Email reports</p>
            </section>

            <button className='ml-32 mt-4 w-44 h-10 bg-blue-950 text-blue-100 rounded-3xl text-xs hover:bg-blue-900 hover:text-white'>Start my trial</button>
        </footer>
    )
}

export default Footer