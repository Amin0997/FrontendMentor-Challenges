import { useState } from 'react'
import { checkIcon, crossIcon } from '../assets/images/SvgIcons'

export default function TodoContainer({ todoValue, id, onDelete }) {

	const [isTextCrossed, setTextCrossed] = useState(false);
	const [isTodoBtnClicked, setTodoBtnClicked] = useState(false);


	return (
		<div 
			id={id} 
			className='w-[540px] h-[65px] px-6 flex items-center justify-between border-b-[1px] border-slate-200 dark:border-slate-700'>
			<section className='flex w-full'>
				<button 
					className={`w-6 h-6 flex items-center justify-center ${isTodoBtnClicked && 'bg-gradient-to-br from-[#57ddff] to-[#c058f3] border-none'}  border-slate-400 border-[1px] border-solid border-opacity-20 rounded-full`}
					onClick={()=> {setTodoBtnClicked(!isTodoBtnClicked)}}
					>
					{isTodoBtnClicked && checkIcon}
				</button>
				<p 
					className={`w-full mx-4 pl-2 text-[18px] font-normal tracking-tight cursor-pointer dark:text-lightGrayishBlue bg-inherit ${isTextCrossed && 'line-through opacity-50'}`}
					onClick={()=> {setTextCrossed(!isTextCrossed)}}
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
