import { useState, useEffect } from 'react';
import { PlusSvg, MinusSvg, EditSvg, DeleteSvg, ReplySvg } from '../assets/images/SvgIcons'

export default function CommentBox({ 
    id, 
    content, 
    createdAt, 
    score, 
    userImg, 
    userName,
    currentUserImg,
    currentUserName,
    onReply,
    onDelete,
    onEdit}) {

    const [count, setCount] = useState(score);
    const [isEditing, setIsEditing] = useState(false);

    // reply btn status
    const [isReplying, setIsReplying] = useState(false);

    // add comment
    const [comment, setComment] = useState(`@${userName} `);
    const [commentEditing, setCommentEditing] = useState(content);


    const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);

    useEffect(() => {
        const storedCount = localStorage.getItem(`${userName}-${id}`);
        if (storedCount !== null) {
            setCount(parseInt(storedCount));
        }
    }, [userName, id]);

    useEffect(() => {
        localStorage.setItem(`${userName}-${id}`, count);
    }, [count, userName, id]);

    const increment = () => {
        if (count <= score) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count >= score) {
            setCount(count - 1);
        }
    }

    const commentText = comment.trim().split(" ").slice(1).join(' ');

    const handleReply = () => {
        onReply({
            id,
            content: 
                (comment.trim().split(" ").length === 1 
                ? (comment === (`@${userName} `) ? '' : comment) 
                : commentText),
            replyingTo: userName,
            createdAt: 'Tolko chto',
            score: count,
        });
        setComment(`@${userName} `);
        setIsReplying(false);
    };

    const handleEdit = () => {
        onEdit({
            id,
            content: commentEditing,
        });
        setCommentEditing(commentEditing);
        setIsEditing(false);
    }


    return (
        <>
        <div id={id} className="comment-box w-[730px] h-[170px] grid grid-cols-custom grid-rows-custom items-center bg-white rounded-xl px-6 py-6 gap-x-6">
            <section className="h-[100px] flex flex-col row-span-2 justify-center items-center -mt-7 gap-y-2 bg-VeryLightGray rounded-xl">
                <button 
                    className='fill-LightGrayishBlue px-1 py-2 hover:fill-GrayishBlue'
                    onClick={increment}
                    >
                    {PlusSvg}
                </button>
                <p className='text-base font-bold text-ModerateBlue'>
                    {count}
                </p>
                <button 
                    className='fill-LightGrayishBlue px-1 py-2 hover:fill-GrayishBlue'
                    onClick={decrement}>
                    {MinusSvg}
                </button>
            </section>

            <header className='flex items-center justify-between -mt-3'>
                <div className='flex items-center'>
                    <img src={userImg} alt="" className='h-8 mr-4'/>
                    <p className='text-base font-bold text-DarkBlue'>{userName}</p>
                    {userName === currentUserName && 
                    <p className='px-1.5 py-0.5 bg-ModerateBlue text-white text-xs rounded-sm ml-2'>
                        you
                    </p>
                    }
                    <p className='ml-3.5 text-base  font-medium text-GrayishBlue tracking-tight'>{createdAt}</p>
                </div>
{/* DELETE BTN */}
                {userName === currentUserName ? (
                    <>
                    <button 
                        className='flex items-center gap-x-2 ml-48'
                        onClick={()=> {
                            setIsDeleteConfirmationVisible(true)
                            document.body.classList.add('overflow-hidden')
                        }}
                        >{DeleteSvg}
                    <span className='font-medium text-base tracking-wide text-red-600 capitalize'>delete</span>
                    </button>
{/* EDIT BTN */}
                    <button 
                        className='flex items-center gap-x-2'
                        onClick={() => setIsEditing(!isEditing)}
                            >{EditSvg}
                        <span className='font-medium text-base tracking-wide capitalize text-ModerateBlue'>edit</span>
                    </button>
                    </>
                ) : 
// REPLY BTN
                <button 
                className={`flex items-center gap-x-2 text-ModerateBlue transition-opacity
                            hover:opacity-50 ${isReplying ? 'opacity-50 hover:opacity-100' : ''}`}
                onClick={() => {
                    setIsReplying(!isReplying)}}
                    >{ReplySvg}
                <span className='font-medium text-base tracking-wide'>Reply</span>
                </button>}
            </header>

            {isEditing ? 
                <div className='flex gap-y-2'>
                    <textarea
                        className='w-[510px] h-24 py-2.5 px-5 -mt-1 mr-4 border-2 border-VeryLightGray rounded-lg resize-none'
                        value={commentEditing}
                        onChange={(e) => setCommentEditing(e.target.value)}
                    />
                    <button 
                        className='w-[95px] h-[48px] rounded-lg bg-ModerateBlue uppercase text-white'
                        onClick={handleEdit}
                            >update
                    </button>
                </div>
            :
                <p className='col-start-2 text-base font-normal text-GrayishBlue'>
                    {content}
                </p>
            }
        </div>

        {isReplying && (
            <section className='w-[730px] h-[145px] p-6 mt-2 mb-2 bg-white flex rounded-lg'>
                <img src={currentUserImg} alt="" className='h-10 mr-4'/>
                <textarea 
                    className='w-[520px] h-24 py-2.5 px-5 -mt-1 mr-4 border-2 border-VeryLightGray rounded-lg resize-none overflow-auto'
                    placeholder='Comment DJAZ'
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value)
                        }}
                    >
                        {userName}
                    </textarea>
                    <button 
                        className='w-[105px] h-[48px] rounded-lg bg-ModerateBlue uppercase text-white -mt-1'
                        onClick={handleReply}
                        >send
                    </button>
            </section>
        )}

        {isDeleteConfirmationVisible && (
            <div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-slate-700 bg-opacity-70'>
                <div className='w-[400px] h-64 bg-white rounded-xl p-8 grid grid-cols-2 gap-x-3'>
                    <h3 className='text-2xl font-bold col-span-2'>Delete comment</h3>
                    <p className='text-GrayishBlue col-span-2 leading-6 -mt-2'>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                    <button 
                        className='uppercase bg-gray-600 rounded-lg text-white'
                        onClick={() => {
                            setIsDeleteConfirmationVisible(false)
                            document.body.classList.remove('overflow-hidden')
                        }}
                    >no, cancel
                    </button>
                    <button 
                        className='uppercase bg-red-600 rounded-lg text-white'
                        onClick={() => {
                            localStorage.removeItem(`${userName}-${id}`);
                            onDelete(id)
                            document.body.classList.remove('overflow-hidden')
                            setIsDeleteConfirmationVisible(false)
                        }}
                    >yes, delete
                    </button>
                </div>
            </div>
        )}
        </>
    )
}
