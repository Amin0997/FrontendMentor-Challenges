import { useEffect, useState } from 'react'
import { checkIcon, crossIcon } from '../assets/images/SvgIcons'

export default function TodoContainer({ 
	todoValue, 
	id, 
	onDelete, 
	todoActive, 
	todoCompleted, 
	activeBtnClicked,
	completedBtnClicked,
	allBtnClicked
}) {

	const [isTodoActive, setTodoActive] = useState(activeBtnClicked);
	const [isTodoCompleted, setTodoCompleted] = useState(completedBtnClicked)
	const [allClicked, setIsAllClicked] = useState(allBtnClicked)

	console.log(isTodoActive)
	// console.log(isTodoCompleted)


	return (
		<div 
			id={id} 
			className='w-[540px] h-[65px] px-6 flex items-center justify-between border-b-[1px] border-slate-200 dark:border-slate-700'>
			<section className='flex w-full'>
				<button 
					className={`w-6 h-6 flex items-center justify-center ${(isTodoActive) && 'bg-gradient-to-br from-[#57ddff] to-[#c058f3] border-none'}  border-slate-400 border-[1px] border-solid border-opacity-20 rounded-full`}
					onClick={()=> {
						setTodoActive(!isTodoActive)
						todoActive(!isTodoActive)
					}}
					>
					{(isTodoActive) && checkIcon}
				</button>
				<p 
					className={`w-full mx-4 pl-2 text-[18px] font-normal tracking-tight cursor-pointer dark:text-lightGrayishBlue bg-inherit ${isTodoCompleted && 'line-through opacity-50'}`}
					onClick={()=> {
						setTodoCompleted(!isTodoCompleted)
						todoCompleted(!isTodoCompleted)
					}}
					>{todoValue}
				</p>
			</section>

			<button 
				className='h-5 w-5'
				onClick={onDelete}
				>
				{crossIcon}
			</button>
		</div>
	)
}
