import { useState,useEffect } from 'react';
import './App.css'
import data from '../data.json'
import CommentBox from './components/CommentBox'
import ReplyBox from './components/ReplyBox'
import AddComment from './helpers/AddComment';

export default function App() {
	const [comments, setComments] = useState([]);
	// const [newComment, setNewComment] = useState('');

	useEffect(() => {
		localStorage.getItem("comments") !== null
			? setComments(JSON.parse(localStorage.getItem("comments")))
			: setComments(data.comments);
		}, []);

	useEffect(() => {
		localStorage.setItem("comments", JSON.stringify(comments));
		}, [comments]);

	const addReply = (commentId, newReply) => {
		const randNum = Math.floor(Math.random() * 100 + 5);
		setComments((prevComments) =>
		prevComments.map((comment) =>
		comment.id === commentId
        ? {
            ...comment,
            replies: [
				...comment.replies,
				{ ...newReply, id: randNum, score: 0 },
            ],
		}
        : comment
		)
	);
};

	// ===== Delete comment and reply =====
	const handleDeleteComment = (commentId) => {
		setComments((prevComments) =>
			prevComments.filter((comment) => comment.id !== commentId)
		);
	};

	const handleReplyDelete = (deleteReplyId) => {
		setComments((prevComments) =>
			prevComments.map((comment) => ({
			...comment, replies: comment.replies.filter((reply) => 
				reply.id !== deleteReplyId),
			}))
		);
	};

	// ===== Edit reply and comment =====
	const editReply = (editCommentId, editedContent) => {
		setComments((prevComments) =>
			prevComments.map((comment) => ({
			...comment, replies: comment.replies.map((reply) => 
				editCommentId === reply.id 
				? {...reply, content: editedContent} 
				: reply
			)
			}))
		);
	};

	const editComment = (editCommentId, editedContent) => {
		setComments((prevComments) =>
			prevComments.map((comment) => (
				editCommentId === comment.id ? {...comment, content: editedContent} : comment
			))
		);
	};

	return (
		<>
		<main className='main'>
			{comments.map((comment) => (
				<div key={comment.id} className="comment-and-reply__container flex flex-col">
					<CommentBox
						commentReply={true}
						id={comment.id}
						content={comment.content}
						createdAt={comment.createdAt}
						score={comment.score}
						userImg={comment.user.image.png}
						userName={comment.user.username}
						currentUserName={data.currentUser.username}
						currentUserImg={data.currentUser.image.png}
						onReply={(newReply) => addReply(comment.id, newReply)}
						onDelete={handleDeleteComment}
						onEdit={(editedComment) => editComment(editedComment.id, editedComment.content)}
					/>

					<div className={`reply__container border-l-2 ml-10 gap-y-2 flex flex-col 
									${comment.replies.length > 0 && 'mt-2'}`}>
						{comment.replies.length > 0 ? comment.replies.map((reply) => (
							<ReplyBox
								width={'710px'}
								key={reply.id}
								id={reply.id}
								score={reply.score}
								replyingTo={reply.replyingTo}
								content={reply.content}
								createdAt={reply.createdAt}
								userImg={reply.user?.image?.png || data.currentUser.image.png}
								userName={reply.user?.username || data.currentUser.username}
								currentUserName={data.currentUser.username}
								currentUserImg={data.currentUser.image.png}
								onReply={(newReply) => addReply(comment.id, newReply)}
								onDelete={handleReplyDelete}
								onEdit={(editedReply) => editReply(editedReply.id, editedReply.content)}
							/>
						)) : null}
					</div>
				</div>
			))}

			<AddComment
				setNewComments={setComments}
			/>

		</main>
		</>
	);
}
