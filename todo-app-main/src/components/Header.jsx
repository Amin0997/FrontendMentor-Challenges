import { useState, useEffect } from 'react'
import { sunIcon, moonIcon } from '../assets/images/SvgIcons'

export default function Header({ onTodoValueChange }) {
	const [todoValue, setTodoValue] = useState('');
	const [theme, setTheme] = useState('system');

	const handleTodoInput = () => {
		onTodoValueChange(todoValue)
		setTodoValue('')
	}

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
		handleTodoInput();
	}
	};

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
		<header className="min-h-[330px] w-full bg-no-repeat bg-cover flex flex-col items-center
						bg-headerBgLight dark:bg-headerBgDark">

			<section className='flex justify-between w-[540px] mt-[96px]'>
				<h1 className="text-[42px] font-bold tracking-[13px] text-white">TODO</h1>
				<button 
					onClick={handleThemeSwitch}>
					{theme === 'dark' ? sunIcon : moonIcon}
				</button>
			</section>

			<label 
				htmlFor='todo-input'
				className='w-[540px] h-[64px] mt-7 bg-white dark:bg-veryDarkDesaturatedBlue rounded-md pl-6 flex items-center'>
					<button 
						className='w-6 h-6 border-slate-400 border-[1px] border-solid border-opacity-20 rounded-full'
						onClick={handleTodoInput}
						/>
					<input 
						id='todo-input'
						className='w-full mx-4 pl-2 text-[18px] text-veryDarkGrayishBlue dark:text-white bg-inherit outline-none placeholder:tracking-tight'
						placeholder='Create a new todo...'
						value={todoValue}
						onChange={(e) => 
							setTodoValue(e.target.value)}
						onKeyDown={handleKeyDown}
					/>
			</label>

		</header>
	)
}
