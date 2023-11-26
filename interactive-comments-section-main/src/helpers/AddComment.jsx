import { useState } from 'react';
import data from '../../data.json'

export default function AddComment({ setNewComments } ) {
    const [newComment, setNewComment] = useState('');

    const addComment = () => {
		const randNum = Math.floor(Math.random() * 100 + 5);
		setNewComments((prevComments) => [
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

    return (
        <section className='w-[730px] h-[145px] p-6 mt-2 mb-2 bg-white flex rounded-lg'>
                <img src={data.currentUser.image.png} alt="" className='h-10 mr-4'/>
                <textarea 
                    className='w-[520px] h-24 py-2.5 px-5 -mt-1 mr-4 border-2 border-VeryLightGray rounded-lg resize-none overflow-auto'
                    placeholder='Add comment'
					value={newComment}
					onChange={(e) => setNewComment(e.target.value)}
                    />
				<button 
					className='w-[105px] h-[48px] rounded-lg font-bold bg-ModerateBlue uppercase text-white -mt-1'
					onClick={addComment}
					>send
				</button>
            </section>
    )
}
