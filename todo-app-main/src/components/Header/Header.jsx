import { useState } from 'react'
import ThemeSwitcher from '../../helpers/ThemeSwitcher';
import './Header.css'


export default function Header({ onTodoValueChange }) {

	const [todoValue, setTodoValue] = useState('');

	const handleTodoInput = () => {
		onTodoValueChange(todoValue)
		setTodoValue('')
	}

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
		handleTodoInput();
	}
	};


	return (
		<header className="header">

			<ThemeSwitcher/>

			<label 
				htmlFor='todo-input'
				className='header__label'>
					<button 
						className='label__apply-btn'
						onClick={handleTodoInput}
						/>
					<input 
						id='todo-input'
						className='label__input'
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
