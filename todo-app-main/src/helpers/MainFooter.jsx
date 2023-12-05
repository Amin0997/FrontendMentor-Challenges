import { useState } from "react"


export default function MainFooter({ todoListCounter, activeListCounter, activeBtnClicked, allBtnClicked, CompletedBtnClicked }) {

	const [isAllClicked, setIsAllClicked] = useState(false);
	const [isActiveClicked, setIsActiveClicked] = useState(false);
	const [isCompletedClicked, setIsCompletedClicked] = useState(false);


	return (
		<footer className="h-[52px] w-full flex items-center bg-inherit text-sm px-6 text-darkGrayishBlue">
			{isActiveClicked ?
				<p>{activeListCounter} items left</p>
			:
				<p>{todoListCounter} items left</p>
			}

			<button 
				className={`ml-24 ${isAllClicked && 'text-blue-500'}`}
				onClick={()=> {
					setIsAllClicked(!isAllClicked)
					setIsActiveClicked(false)
					setIsCompletedClicked(false)
					allBtnClicked(isAllClicked)
				}}
				>
				All
			</button>

			<button 
				className={`ml-5 ${isActiveClicked && 'text-blue-500'}`}
				onClick={()=> {
					setIsActiveClicked(!isActiveClicked)
					setIsAllClicked(false)
					setIsCompletedClicked(false)
					activeBtnClicked(!isActiveClicked)
				}}
				>
				Active
			</button>

			<button 
				className={`ml-5 ${isCompletedClicked && 'text-blue-500'}`}
				onClick={()=> {
					setIsCompletedClicked(!isCompletedClicked)
					setIsAllClicked(false)
					setIsActiveClicked(false)
					CompletedBtnClicked(!isCompletedClicked)
				}}
				>
				Completed
			</button>

			<button 
				className="ml-14"
				// onClick={1}
				>
				Clear Completed
			</button>
		</footer>
	)
}
