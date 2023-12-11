import { useState } from "react"


export default function MainFooter({ 
	todoListCounter, 
	activeListCounter,
	completeListCounter,
	activeBtnClicked,
	allBtnClicked,
	completedBtnClicked,
	clearCompletedClicked }) {

	const [isAllClicked, setIsAllClicked] = useState(true);
	const [isActiveClicked, setIsActiveClicked] = useState(false);
	const [isCompletedClicked, setIsCompletedClicked] = useState(false);


	return (
		<footer className="h-[52px] w-full px-6 text-center flex items-center bg-inherit text-sm text-darkGrayishBlue
			max-sm:h-[45px] max-sm:text-[10px] max-sm:px-2">
			{isAllClicked && 
				<p>{todoListCounter} items left</p>
			}
			{isActiveClicked && 
				<p>{activeListCounter} items left</p>
			}
			{isCompletedClicked && 
				<p>{completeListCounter} items left</p>
			}

			<button 
				className={`ml-24 max-sm:ml-5 ${isAllClicked && 'text-blue-500'}`}
				onClick={()=> {
					setIsAllClicked(true)
					allBtnClicked(true)

					setIsActiveClicked(false)
					activeBtnClicked(false)

					setIsCompletedClicked(false)
					completedBtnClicked(false)
				}}
				>
				All
			</button>

			<button 
				className={`ml-5 max-sm:ml-3 ${isActiveClicked && 'text-blue-500'}`}
				onClick={()=> {
					setIsActiveClicked(true)
					activeBtnClicked(true)

					setIsAllClicked(false)
					allBtnClicked(false)

					setIsCompletedClicked(false)
					completedBtnClicked(false)
				}}
				>
				Active
			</button>

			<button 
				className={`ml-5 max-sm:ml-3 ${isCompletedClicked && 'text-blue-500'}`}
				onClick={()=> {
					setIsCompletedClicked(true)
					completedBtnClicked(true)

					setIsAllClicked(false)
					allBtnClicked(false)

					setIsActiveClicked(false)
					activeBtnClicked(false)
				}}
				>
				Completed
			</button>

			<button 
				className="ml-14 max-sm:ml-4 active:text-blue-500"
				onClick={()=> {
					clearCompletedClicked(true)

				}}
				>
				Clear Completed
			</button>
		</footer>
	)
}
