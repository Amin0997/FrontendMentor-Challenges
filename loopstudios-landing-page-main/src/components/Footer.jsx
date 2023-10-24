import { navItems } from '../helpers/NavItems';
import { socialMediaIcons } from '../helpers/SocialMediaIcons';
import logo from '../images/logo.svg';

function Footer() {
return (
    <footer className="h-40 bg-black text-white py-11 px-[165px] grid grid-cols-2 justify-between 
                        max-md:grid-cols-1 max-md:justify-items-center max-md:p-[52px] max-md:h-fit max-md:gap-y-7">
        <a href="##"><img src={logo} alt="" className="h-6 w-36" /></a>


        <ul className='flex gap-x-4 justify-self-end max-md:hidden'>
            {socialMediaIcons.map((icon, index) => (
            <li key={index} className='relative flex justify-center transition ease-in-out
            before:w-5 before:h-0.5 before:bg-white before:absolute before:top-8 before:hidden hover:before:inline-block'>
                <a href="##">
                <img src={icon.url} alt="" />
                </a>
            </li>
            ))}
        </ul>

        <ul className="flex gap-x-[32px] text-white font-Alata capitalize text-[15px] font-normal leading-6 
                        max-md:flex-col max-md:gap-y-4">
            {navItems.map(({ link, href }) => (
            <li key={link} className='relative flex justify-center transition ease-in-out
                                        before:w-6 before:h-0.5 before:bg-white before:absolute before:top-8 before:hidden hover:before:inline-block'>
                <a href={href} className=''>{link}</a>
            </li>
            ))}
        </ul>

        <ul className='gap-x-4 hidden max-md:flex'>
            {socialMediaIcons.map((icon, index) => (
            <li key={index} className='relative flex justify-center transition ease-in-out
            before:w-5 before:h-0.5 before:bg-white before:absolute before:top-8 before:hidden hover:before:inline-block'>
                <a href="##">
                <img src={icon.url} alt="" />
                </a>
            </li>
            ))}
        </ul>

        <p className='text-sm opacity-50 font-normal leading-6 font-Alata justify-self-end max-md:justify-self-center'>© 2021 Loopstudios. All rights reserved.</p>
    </footer>
);
}

export default Footer;
