import { useState } from 'react';
import { PlusSvg, MinusSvg, EditSvg, DeleteSvg, ReplySvg } from '../assets/images/SvgIcons'

export default function ReplyBox({ 
    id, 
    content, 
    createdAt, 
    score, 
    userImg, 
    userName, 
    onReply, 
    currentUserName, 
    currentUserImg, 
    onDelete,
    onEdit }) {
    // comment score
    const lsNum = parseInt(localStorage.getItem(userName + id));
    const [count, setCount] = useState(lsNum || score);
    // reply and edit btns status
    const [isReplying, setIsReplying] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // add comment
    const replyingToUser = userName ? `@${userName}, ` : "";
    const [comment, setComment] = useState(replyingToUser);
    const [commentEditing, setCommentEditing] = useState(content);

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

    const handleReply = () => {
        onReply({
            id,
            content: comment,
            userName,
            createdAt,
            score: 0,
        });
        setComment(replyingToUser);
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
        <div id={id} className="reply-box w-[640px] min-h-[170px] grid grid-cols-custom grid-rows-custom items-center rounded-xl bg-white
                                ml-12 px-6 py-6 gap-x-6">
            <section className=" h-[100px] flex flex-col row-span-2 justify-center items-center -mt-7 gap-y-2 bg-VeryLightGray rounded-xl">
                <button 
                    className='fill-LightGrayishBlue px-1 py-2 hover:fill-GrayishBlue'
                    onClick={increment}>
                    {PlusSvg}
                </button>
                <p 
                    className='text-base font-bold text-ModerateBlue'
                    onChange={localStorage.setItem(userName, count)}>
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
                    <p className='ml-3.5 text-base  font-medium text-GrayishBlue tracking-tight'>{createdAt}</p>
                </div>
{/* DELETE BTN */}
                {userName === currentUserName ? (
                    <>
                    <button 
                        className='flex items-center gap-x-2 ml-32'
                        onClick={()=> onDelete(id)}
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
                <div className='flex flex-col gap-y-2'>
                    <textarea
                        className='w-full h-24 py-2.5 px-5 -mt-1 mr-4 border-2 border-VeryLightGray rounded-lg resize-none'
                        value={commentEditing}
                        onChange={(e) => setCommentEditing(e.target.value)}
                    />
                    <button 
                        className='w-[95px] h-[48px] rounded-lg bg-ModerateBlue uppercase text-white self-end'
                        onClick={handleEdit}
                            >update
                    </button>
                </div>
            :
                    <p className='flex col-start-2 text-base font-normal text-GrayishBlue'>
                        {content}
                    </p>
            }
        </div>

        {isReplying && (
            <section className='w-[640px] h-[145px] p-6 mt-2 ml-12 bg-white flex rounded-lg'>
                <img src={currentUserImg} alt="" className='h-10 mr-4'/>
                <textarea 
                    className='w-[420px] h-24 py-2.5 px-5 -mt-1 mr-4 border-2 border-VeryLightGray rounded-lg resize-none overflow-auto'
                    name="" 
                    id=""
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}/>
                    <button 
                        className='w-[105px] h-[48px] rounded-lg bg-ModerateBlue uppercase text-white'
                        onClick={handleReply}
                        >send
                    </button>
            </section>
        )}
        </>
    )
}
