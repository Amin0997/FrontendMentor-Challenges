import { navItems } from '../../helpers/NavItems';
import { socialMediaIcons } from '../../helpers/SocialMediaIcons';
import logo from '../../images/logo.svg';
import './Footer.scss'

function Footer() {
return (
    <footer className="footer">
        <a href="##"><img src={logo} alt="" className="h-6 w-36" /></a>


        <ul className='flex gap-x-4 justify-self-end max-md:hidden'>
            {socialMediaIcons.map((icon, index) => (
            <li key={index} className='footer__list-item'>
                <a href="##">
                <img src={icon.url} alt="" />
                </a>
            </li>
            ))}
        </ul>

        <ul className="footer__list">
            {navItems.map(({ link, href }) => (
            <li key={link} className='footer__list-item'>
                <a href={href} className=''>{link}</a>
            </li>
            ))}
        </ul>

        <ul className='gap-x-4 hidden max-md:flex'>
            {socialMediaIcons.map((icon, index) => (
            <li key={index} className='footer__list-item'>
                <a href="##">
                <img src={icon.url} alt="" />
                </a>
            </li>
            ))}
        </ul>

        <p className='footer__rights-txt'>© 2021 Loopstudios. All rights reserved.</p>
    </footer>
);
}

export default Footer;
