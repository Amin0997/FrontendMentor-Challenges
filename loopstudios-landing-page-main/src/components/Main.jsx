import {creationsDesktop} from '../helpers/DesktopCreations.jsx'
import {creationsMobile} from '../helpers/MobileCreations.jsx'

function Main() {

    const useMobileCreations = window.matchMedia('(max-width: 768px)').matches;

    const creationsToUse = useMobileCreations ? creationsMobile : creationsDesktop;

    return (
        <main className="mt-40 px-[11.5%] mb-[184px] flex flex-col max-xl:mt-12 max-md:mb-0">
            <section className="h-[500px] max-w-[1111px] mb-24 flex relative items-end justify-end self-center
                                max-xl:flex-col max-xl:items-center max-xl:justify-center max-xl:h-full max-md:mb-12">
                <dir className='bg-mainInteractiveDesktop bg-no-repeat w-[1111px] h-full flex
                                max-xl:p-0 max-xl:w-[650px] max-xl:h-[400px] max-xl:bg-cover
                                max-md:bg-mainInteractiveMobile max-md:w-[500px] max-md:h-[300px] max-md:bg-cover
                                max-sm:w-[320px] max-sm:h-[200px]'></dir>
                <div className="absolute max-w-[541px] max-h-[317px] pt-24 pl-24 bg-white flex flex-col 
                                max-xl:static max-xl:p-0 max-xl:text-center max-xl:items-center max-xl:pt-10">
                    <span className="text-5xl font-Josefin font-light uppercase mb-6
                                    max-sm:text-3xl max-sm:mb-4">The leader in interactive VR</span>
                    <p className="font-Alata font-normal text-[15px] opacity-50 ">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                </div>
            </section>

{/* ----- CREATIONS ----- */}

            <section className='flex flex-col'>
                <header className="flex justify-between items-center mb-20 max-md:justify-center max-md:mb-12">
                    <h3 className="uppercase font-Josefin font-light text-black text-5xl
                                    max-md:text-3xl">our creations</h3>
                    <a href="##" className="w-40 h-10 uppercase border-[1px] transition ease-in-out border-black flex items-center justify-center font-Alata font-normal text-sm tracking-[5px] 
                                            hover:bg-black hover:text-white max-md:hidden">see all</a>
                </header>

                <ul className="flex gap-7 flex-wrap justify-center max-w-screen-xl self-center
                                max-md:gap-y-6">
                    {creationsToUse.map((e, index) => (
                        <li key={index} className="relative flex items-end cursor-pointer text-white shrink-0
                                                    max-md:w-[327px] max-md:h-[120px] max-md:">
                            <img src={e.url} alt="" className='max-md:w-[327px] max-md:h-[120px] max-md:'/>
                            <div className="absolute flex items-end w-full h-full bg-textGreyBg transition ease-in hover:text-black hover:bg-textWhiteBg">
                                <p className="mx-10 mb-8 font-Josefin bold-light uppercase text-[32px]
                                                max-md:m-5 max-md:text-2xl max-md:basis-2/5">{e.text}</p>
                            </div>
                            
                        </li>
                    ))}
                </ul>

                <a href="##" className="w-40 h-10 uppercase border-[1px] transition ease-in-out border-black items-center justify-center font-Alata font-normal text-sm tracking-[5px] hidden
                                        hover:bg-black hover:text-white max-md:flex max-md:self-center max-md:mt-8 max-md:mb-24">see all</a>
            </section>

        </main>
    );
}

export default Main;
