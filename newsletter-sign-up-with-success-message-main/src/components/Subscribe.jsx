import listIcon from '../assets/images/icon-list.svg'
import rightSectionImgDesktop from '../assets/images/illustration-sign-up-desktop.svg'
import rightSectionImgMobile from '../assets/images/illustration-sign-up-mobile.svg'
import { useState } from 'react'
import { useNavigate  } from 'react-router-dom';

export default function LeftSection() {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const emailValidator = () => {
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEx.test(email);
    }

    const handleOnChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailValidator()) {
            setEmailError('Valid email required');
        } else {
            setEmailError('');
            navigate('/SuccessfulSubscribing');
        }
    }

    return (
        <div className="h-[640px] max-w-[930px] bg-white rounded-[35px] pl-16 py-4 flex gap-x-16
                        max-md:flex-col">
            <section className="mt-[77px] font-roboto w-[43.5%] order-1 max-md:order-2">
                <h2 className="text-6xl font-bold tracking-tight">Stay updated!</h2>
                <p className="mt-6 ">Join 60,000+ product managers receiving monthly updates on:</p>

                <ul className="mt-6 flex flex-col gap-y-2.5">
                    <li className='flex gap-4'>
                        <img src={listIcon} alt="" />
                        Product discovery and building what matters
                    </li>

                    <li className='flex gap-4'>
                        <img src={listIcon} alt="" />
                        Measuring to ensure updates are a success
                    </li>

                    <li className='flex gap-4'>
                        <img src={listIcon} alt="" />
                        And much more!
                    </li>
                </ul>

                <form onSubmit={handleSubmit} className='mt-10'>
                    <p className='text-xs mb-2 font-bold flex justify-between'>Email address
                        {emailError && <span className='text-red-400'>{emailError}</span>}
                    </p>
                    <input
                        type="text"
                        placeholder='email@company.com'
                        className={`w-full p-4 pl-6 border border-slate-300 rounded-lg focus:outline-none cursor-pointer ${emailError ? 'bg-red-200 border-red-500' : 'bg-white'}`}
                        value={email}
                        onChange={handleOnChange}
                    />
                    <button
                        type="submit"
                        className='mt-6 w-full h-14 bg-darkSlateGrey text-white rounded-lg transition ease-in-out duration-75
                                    hover:bg-gradient-to-r hover:from-[rgb(226,58,128,1)] hover:to-[rgb(255,98,87,1)] hover:shadow-btnShadow active:scale-95'
                    >Subscribe to monthly newsletter
                    </button>
                </form>
            </section>

            <section className='self-center order-2 max-md:order-1'>
                <img src={rightSectionImgDesktop} alt="" />
            </section>
    </div>
    )
}
