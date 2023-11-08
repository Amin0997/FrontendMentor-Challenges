import './App.css'
import CommentBox from './components/CommentBox'
import data from '../data.json'
import ReplyBox from './components/ReplyBox'

export default function App() {
	return (
		<div className='min-h-screen pt-6 flex flex-col items-center bg-VeryLightGray font-Rubik'>
			{data.comments.map((comment) => (
				<>
				{console.log(comment)}
				<CommentBox 
					key={comment.id} 
					id={comment.id} 
					content={comment.content} 
					createdAt={comment.createdAt} 
					score={comment.score} 
					userImg={comment.user.image.png} 
					userName={comment.user.username}
				/>

				{comment.replies.length > 0 ? comment.replies.map((reply) => 
				<ReplyBox 
				key={reply.id} 
					id={reply.id} 
					content={reply.content} 
					createdAt={reply.createdAt} 
					score={reply.score} 
					userImg={reply.user.image.png} 
					userName={reply.user.username}
					replyTo={reply.replyTo}
				/> 
				)  : null} 
				</>
			)
			)}
		</div>
	)
}
