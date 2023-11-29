import { useState } from 'react'
import { checkIcon, crossIcon } from '../assets/images/SvgIcons'

export default function TodoContainer({ todoValue, id, onDelete }) {

	const [isTextCrossed, setTextCrossed] = useState(false);


	return (
		<div 
			id={id} 
			className='w-[540px] h-[65px] px-6 flex items-center justify-between border-b-[1px] border-slate-200 dark:border-slate-700'
			onClick={()=> {setTextCrossed(!isTextCrossed)}}>
			
			<section className='flex'>
				<button className='w-6 h-6 border-slate-400 border-[1px] border-solid border-opacity-20 rounded-full'/>
				<p className={`mx-4 pl-2 text-[18px] font-normal tracking-tight dark:text-lightGrayishBlue bg-inherit ${isTextCrossed && 'line-through opacity-50'}`}>
					{todoValue}
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
