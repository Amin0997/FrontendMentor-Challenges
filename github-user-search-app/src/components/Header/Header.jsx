import './Header.scss'
import loupeImg from '../../assets/icon-search.svg'
import moonImg from '../../assets/icon-moon.svg'
import sunImg from '../../assets/icon-sun.svg'
import { useState, useEffect } from 'react';

export default function Header({ userData }) {

    const [name, setName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [theme, setTheme] = useState('system');
    const [noResult, setNoResult] = useState(false);

    useEffect(() => {
        if (name) {
            fetch(`https://api.github.com/users/${name}`, {
                headers: {
                    Authorization: 'token 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'
                }
            })
            .then(response => {
                if (response.status === 404) {
                    setNoResult(true);
                } else {
                    setNoResult(false);
                }
                return response.json();
            })
            .then(data => userData(data))
            .catch(error => console.error(error));
        } else {
            // TODO: Add empty input verification;
        }
    }, [name]);   

{/* ----- Theme switch ----- */}
        useEffect(() => {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
                setTheme('dark');
            } else {
                document.documentElement.classList.remove('dark')
                setTheme('light');
            }
        }, [theme]);

    return (

        <header className='header grid grid-cols-2 w-[730px] mb-6 gap-y-9'>
            <a href="##"><h1 className='text-2xl font-bold self-center dark:text-white'>devfinder</h1></a>

            <section className='flex items-center justify-end gap-x-4'>
                <p className='uppercase text-sm tracking-widest font-bold text-slate-500 dark:text-white'>
                    {theme === 'dark' ? 'light' : 'dark'}
                </p>
                <button
                    className=''
                    onClick={() => {
                        const newTheme = theme === 'dark' ? 'light' : 'dark';
                        setTheme(newTheme);
                        localStorage.setItem('theme', newTheme);
                    }}>
                    <img src={theme === 'dark' ? sunImg : moonImg} alt="" className='' />
                </button>
            </section>

            <label className='header__input-label'>
                <img src={loupeImg} alt="" className=''/>
                <input
                    className='header__input'
                    type="text"
                    placeholder='Search GitHub username…'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            <p className={`absolute left-[70%] text-[#F74646] ${noResult ? '' : 'hidden'}`}>No result</p>

                <button
                    type="submit"
                    onClick={() => setName(inputValue)}
                    className='mr-[10px] w-[106px] h-[50px] bg-[#0079FF] rounded-xl text-white hover:bg-[#60ABFF]'>
                        Search
                </button>
            </label>
        </header>
    )
}
