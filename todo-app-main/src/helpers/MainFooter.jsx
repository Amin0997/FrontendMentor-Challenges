import { useEffect, useState } from "react"


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
		<footer className="h-[52px] w-full flex items-center bg-inherit text-sm px-6 text-darkGrayishBlue">
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
				className={`ml-24 ${isAllClicked && 'text-blue-500'}`}
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
				className={`ml-5 ${isActiveClicked && 'text-blue-500'}`}
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
				className={`ml-5 ${isCompletedClicked && 'text-blue-500'}`}
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
				className="ml-14 active:text-blue-500"
				onClick={()=> {
					clearCompletedClicked(true)

				}}
				>
				Clear Completed
			</button>
		</footer>
	)
}
