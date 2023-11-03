import profileImg from '../../assets/Bitmap.png'
import companyImg from '../../assets/icon-company.svg'
import locationImg from '../../assets/icon-location.svg'
import twitterImg from '../../assets/icon-twitter.svg'
import websiteImg from '../../assets/icon-website.svg'

export default function Main() {
    
    return (
        <main className="main h-[419px] w-[730px] grid grid-cols-4 grid-rows-7 auto-rows-max bg-white rounded-2xl p-12 dark:bg-[#1E2A47]">
            <img src={profileImg} alt="" className='rounded-full row-start-1 row-end-6 w-[117px] h-[117px]'/>
            <p id='1' className='col-start-2 col-end-5 flex justify-between items-center text-graniteGray text-[26px] font-bold dark:text-white'>
                Octocat
                <span className="col-start-4 text-right text-[15px] font-normal text-[#697C9A] dark:text-white">
                    Joined 25 Jan 2011
                </span>
            </p>
            <p className="col-span-3 text-[#0079FF] text-base font-normal mb-5">@octocat</p>
            <p className=" col-span-3 text-vkColor opacity-75 text-[15px] font-normal mb-8 dark:text-white">This profile has no bio</p>
            <section className="grid grid-cols-3 col-span-3 row-start-4 row-end-5 bg-slate-100 px-8 py-4 rounded-lg mb-9 dark:bg-[#141D2F]">
                <p className='card__statistic'>Repos<span className='text-[22px] font-bold text-graniteGray dark:text-white'>8</span></p>
                <p className='card__statistic'>Followers<span className='text-[22px] font-bold text-graniteGray dark:text-white'>3938</span></p>
                <p className='card__statistic'>Following<span className='text-[22px] font-bold text-graniteGray dark:text-white'>9</span></p>
            </section>
            <a href="##" className="card__link col-start-2 row-start-6 mb-5"><img src={locationImg} alt="" />San Francisco</a>
            <a href="##" className="card__link col-start-4 row-start-6 mb-5  opacity-75"><img src={twitterImg} alt="" />Not Available</a>
            <a href="##" className="card__link col-start-2 row-start-7 hover:underline"><img src={websiteImg} alt="" />https://github.blog</a>
            <a href="##" className="card__link col-start-4 row-start-7"><img src={companyImg} alt="" />@github</a>
        </main>
    )
}
