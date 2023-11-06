import './App.css'
import CommentBox from './components/CommentBox'
import data from '../data.json'

export default function App() {

	return (
		<div className='min-h-screen pt-6 flex flex-col items-center bg-VeryLightGray font-Rubik'>
			{data.comments.map((comment) => (
				<CommentBox 
					key={comment.id} 
					id={comment.id} 
					content={comment.content} 
					createdAt={comment.createdAt} 
					score={comment.score} 
					userImg={comment.user.image.png} 
					userName={comment.user.username}
				/>
			)
			)}
		</div>
	)
}
