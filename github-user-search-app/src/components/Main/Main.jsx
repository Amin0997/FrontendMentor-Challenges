import companyImg from '../../assets/icon-company.svg'
import locationImg from '../../assets/icon-location.svg'
import twitterImg from '../../assets/icon-twitter.svg'
import websiteImg from '../../assets/icon-website.svg'

export default function Main({ userData }) {

    const userCreateDate = new Date(userData.created_at);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = userCreateDate.toLocaleString('en-GB', options);

    return (
        <main className="main h-[419px] w-[730px] grid grid-cols-4 grid-rows-7 auto-rows-max bg-white rounded-2xl p-12 dark:bg-[#1E2A47]">

{/* ----- PROFILE IMAGE AND BIO ----- */}
            <img src={userData.avatar_url} alt="" className='rounded-full row-start-1 row-end-6 w-[117px] h-[117px] shadow-2xl'/>

            <p className='col-start-2 col-end-5 flex justify-between items-center text-graniteGray text-[26px] font-bold dark:text-white'>
                {userData.name}
                <span className="col-start-4 text-right text-[15px] font-normal text-[#697C9A] dark:text-white">
                    Joined {formattedDate}
                </span>
            </p>

            <p className="col-span-3 text-[#0079FF] text-base font-normal mb-5">
                @{userData.login}
            </p>

            <p className=" col-span-3 text-vkColor opacity-75 text-[15px] font-normal mb-8 dark:text-white">
                {userData.bio ? userData.bio : "This profile has no bio"}
            </p>

{/* ----- PROFILE STATISTIC ----- */}
            <div className="grid grid-cols-3 col-span-3 row-start-4 row-end-5 bg-slate-100 px-8 py-4 rounded-lg mb-9 dark:bg-[#141D2F]">
                <p className='flex flex-col text-[13px] font-normal text-vkColor dark:text-white'>
                    Repos
                    <span className='text-[22px] font-bold text-graniteGray dark:text-white'>
                        {userData.public_repos}
                    </span>
                </p>

                <p className='flex flex-col text-[13px] font-normal text-vkColor dark:text-white'>
                    Followers
                    <span className='text-[22px] font-bold text-graniteGray dark:text-white'>
                        {userData.followers}
                    </span>
                </p>

                <p className='flex flex-col text-[13px] font-normal text-vkColor dark:text-white'>
                    Following
                    <span className='text-[22px] font-bold text-graniteGray dark:text-white'>
                        {userData.following}
                    </span>
                </p>
            </div>

{/* ----- PROFILE LINKS ----- */}
            <a href="##" className="flex gap-x-4 col-start-2 row-start-6 mb-5 text-[15px] font-normal text-vkColor dark:text-white">
                <img src={locationImg} alt="" />
                {userData.location ? userData.location : "Not Available"}
            </a>
            <a href="##" className="flex gap-x-4 col-start-4 row-start-6 mb-5 text-[15px] font-normal text-vkColor dark:text-white">
                <img src={twitterImg} alt="" />
                {userData.twitter_username ? userData.twitter_username : "Not Available"}
            </a>
            <a href={`http://${userData.blog}`} className="flex gap-x-4 col-start-2 row-start-7 text-[15px] font-normal text-vkColor hover:underline dark:text-white">
                <img src={websiteImg} alt="" />
                {userData.blog ? userData.blog : "Not Available"}
            </a>
            <a href="##" className="flex gap-x-4 col-start-4 row-start-7 text-[15px] font-normal text-vkColor dark:text-white">
                <img src={companyImg} alt="" />
                {userData.company ? userData.company : "Not Available"}
            </a>
        </main>
    )
}
