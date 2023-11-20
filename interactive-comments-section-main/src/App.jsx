import { useState } from 'react';
import './App.css'
import data from '../data.json'
import CommentBox from './components/CommentBox'
import ReplyBox from './components/ReplyBox'

export default function App() {
	const [comments, setComments] = useState(data.comments);
	const [newComment, setNewComment] = useState('');

	const addComment = () => {
		const randNum = Math.floor(Math.random() * 100 + 5);
		setComments((prevComments) => [
			...prevComments,
			{
				id: randNum,
				content: newComment,
				score: 0,
				createdAt: '5 hours ago',
				user: {
					image: {
						png: data.currentUser.image.png,
					},
					username: data.currentUser.username,
				},
				replies: [],
			},
		]);
		setNewComment('');
	};
	
	

	const addReply = (commentId, newReply) => {
		const randNum = Math.floor(Math.random() * 100 + 5);
		setComments((prevComments) =>
		prevComments.map((comment) =>
			comment.id === commentId
			? { ...comment, replies: [...comment.replies, {...newReply, id:randNum}],}
			: comment
		));
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
			...comment, replies: comment.replies.filter((reply) => reply.id !== deleteReplyId),
			}))
		);
	};

	// ===== Edit reply and comment =====
	const editReply = (editCommentId, editedContent) => {
		setComments((prevComments) =>
			prevComments.map((comment) => ({
			...comment, replies: comment.replies.map((reply) => 
				editCommentId === reply.id ? {...reply, content: editedContent} : reply
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
						onDelete={handleDeleteComment}
						onEdit={(editedComment) => editComment(editedComment.id, editedComment.content)}
					/>

					<div className={`reply__container border-l-2 ml-10 gap-y-2 flex flex-col ${comment.replies.length > 0 && 'mt-2'}`}>
						{comment.replies.length > 0 ? comment.replies.map((reply) => (
							<ReplyBox
								key={reply.id}
								id={reply.id}
								score={reply.score || 0}
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

			<section className='w-[730px] h-[145px] p-6 mt-2 mb-2 bg-white flex rounded-lg'>
                <img src={data.currentUser.image.png} alt="" className='h-10 mr-4'/>
                <textarea 
                    className='w-[520px] h-24 py-2.5 px-5 -mt-1 mr-4 border-2 border-VeryLightGray rounded-lg resize-none overflow-auto'
                    placeholder='Comment DJAZ'
					value={newComment}
					onChange={(e) => setNewComment(e.target.value)}
                    />
				<button 
					className='w-[105px] h-[48px] rounded-lg font-bold bg-ModerateBlue uppercase text-white -mt-1'
					onClick={addComment}
					>send
				</button>
            </section>
		</main>
		</>
	);
}
