import { useEffect, useState } from 'react'
import { sunIcon, moonIcon } from '../assets/images/SvgIcons'


export default function ThemeSwitcher() {
	const [theme, setTheme] = useState('system');

	const handleThemeSwitch = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	}

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
		<section className='flex justify-between w-[540px] mt-[96px]'>
			<h1 className="text-[42px] font-bold tracking-[13px] text-white">TODO</h1>
			<button
				onClick={handleThemeSwitch}
			>
				{theme === 'dark' ? sunIcon : moonIcon}
			</button>
		</section>
	)
}
