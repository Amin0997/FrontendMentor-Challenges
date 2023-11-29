import { checkIcon, crossIcon } from '../assets/images/SvgIcons'
import TodoContainer from '../helpers/TodoContainer'
import MainFooter from '../helpers/MainFooter'
import { useState } from 'react'

export default function Main(inputTodoValue) {
	const [todoList, setInTodoList] = useState([])
	console.log(todoList)

	return (
		<main className='w-ful flex flex-col items-center -mt-14 overflow-hidden rounded-lg bg-white dark:bg-veryDarkDesaturatedBlue'>

			<TodoContainer />
			<TodoContainer />
			<TodoContainer />
			<TodoContainer />
			<TodoContainer />
			<TodoContainer />

			<MainFooter />
		</main>
	)
	}
