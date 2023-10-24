import {creationsDesktop} from '../../helpers/DesktopCreations.jsx'
import {creationsMobile} from '../../helpers/MobileCreations.jsx'
import './Main.scss'

function Main() {

    const useMobileCreations = window.matchMedia('(max-width: 768px)').matches;

    const creationsToUse = useMobileCreations ? creationsMobile : creationsDesktop;

    return (
        <main className="mt-40 px-[11.5%] mb-[184px] flex flex-col max-xl:mt-12 max-md:mb-0">
            <section className="leader">
                <dir className='leader__img'></dir>
                <div className="leader__txt">
                    <span className="leader__txt-title">The leader in interactive VR</span>
                    <p className="font-Alata font-normal text-[15px] opacity-50 ">
                        Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                    </p>
                </div>
            </section>

{/* ----- CREATIONS ----- */}

            <section className='flex flex-col'>
                <header className="flex justify-between items-center mb-20 max-md:justify-center max-md:mb-12">
                    <h3 className="uppercase font-Josefin font-light text-black text-5xl
                                    max-md:text-3xl">our creations</h3>
                    <a href="##" className="see-all_link">see all</a>
                </header>

                <ul className="creations__list">
                    {creationsToUse.map((e, index) => (
                        <li key={index} className="creations__list_item">
                            <img src={e.url} alt="" className='max-md:w-[327px] max-md:h-[120px]'/>
                            <div className="creations__list_item_cover-container">
                                <p className="creations__list_item_cover-container_txt">{e.text}</p>
                            </div>
                            
                        </li>
                    ))}
                </ul>

                <a href="##" className="see-all_link hidden 
                                        max-md:flex max-md:self-center max-md:mt-8 max-md:mb-24">see all</a>
            </section>

        </main>
    );
}

export default Main;
