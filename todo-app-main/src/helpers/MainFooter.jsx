

export default function MainFooter({ todoListCounter }) {
	return (
		<footer className="h-[52px] w-full flex items-center bg-inherit text-sm px-6 text-darkGrayishBlue">
			<p>{todoListCounter} items left</p>

			<button 
				className="ml-24"
				// onClick={1}
				>
				All
			</button>

			<button 
				className="ml-5"
				// onClick={1}
				>
				Active
			</button>

			<button 
				className="ml-5"
				// onClick={1}
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
