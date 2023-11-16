import { useState } from 'react';
import './App.css'
import data from '../data.json'
import CommentBox from './components/CommentBox'
import ReplyBox from './components/ReplyBox'

export default function App() {
	const [comments, setComments] = useState(data.comments);

	const addReply = (commentId, newReply) => {
		const randNum = Math.floor(Math.random() * 100 + 5);
		console.log(newReply)
		setComments((prevComments) =>
		prevComments.map((comment) =>
			comment.id === commentId
			? { ...comment, replies: [...comment.replies, {...newReply, id:randNum}],}
			: comment
		));
	};

	// Delete comment or reply
	const deleteComment = (commentId) => {
		setComments((prevComments) =>
			prevComments.filter((comment) => comment.id !== commentId)
		);
	};

	const handleReplyDelete = (deleteReplyId) => {
		setComments((prevComments) =>
			prevComments.map((comment) => ({
			...comment, replies: comment.replies.filter((reply) => reply.id !== deleteReplyId),
			}))
		);
	};

	return (
		<main className='min-h-screen pt-6 flex flex-col items-center gap-y-4 bg-VeryLightGray font-Rubik'>
			{comments.map((comment) => (
				<div key={comment.id} className="comment-and-reply__container flex flex-col">
					<CommentBox
						id={comment.id}
						content={comment.content}
						createdAt={comment.createdAt}
						score={comment.score}
						userImg={comment.user.image.png}
						userName={comment.user.username}
						currentUserName={data.currentUser.username}
						currentUserImg={data.currentUser.image.png}
						onReply={(newReply) => addReply(comment.id, newReply)}
					/>

					<div className={`reply__container border-l-2 ml-10 gap-y-2 flex flex-col ${comment.replies.length > 0 && 'mt-2'}`}>
						{comment.replies.length > 0 ? comment.replies.map((reply) => (
							<ReplyBox
								key={reply.id}
								id={reply.id}
								score={reply.score || 0}
								content={reply.content}
								createdAt={reply.createdAt}
								userImg={reply.user?.image?.png || data.currentUser.image.png}
								userName={reply.user?.username || data.currentUser.username}
								currentUserName={data.currentUser.username}
								currentUserImg={data.currentUser.image.png}
								onReply={(newReply) => addReply(comment.id, newReply)}
								onDelete={handleReplyDelete}
							/>
						)) : null}
					</div>
				</div>
			))}
		</main>
	);
}
