import { useState } from "react";
import { EditSvg, DeleteSvg, ReplySvg } from '../assets/images/SvgIcons'

export default function Header({
    userImg,
    userName,
    currentUserName,
    createdAt,
    onEditingChange,
    onReplyingChange,
    onDeleteChange,
    commentReply
    }) {

    const [isReplying, setIsReplying] = useState(false);

    const handleEditingChange = () => {
        onEditingChange(true);
    };

    const handleReplyingChange = () => {
        onReplyingChange(!isReplying);
        setIsReplying(!isReplying)
    };

    const handleDeleteChange = () => {
        onDeleteChange(true);
    }

    return (
        <header className='flex items-center justify-between -mt-3'>
            <div className='flex items-center'>
                <img src={userImg} alt="" className='h-8 mr-4'/>
                <p className='text-base font-bold text-DarkBlue'>
                    {userName}
                </p>
                {userName === currentUserName && 
                <p className='px-1.5 py-0.5 bg-ModerateBlue text-white text-xs rounded-sm ml-2'>
                    you
                </p>
                }
                <p className='ml-3.5 text-base  font-medium text-GrayishBlue tracking-tight'>
                    {createdAt}
                </p>
            </div>
{/* DELETE BTN */}
            {userName === currentUserName ? (
                <>
                <button 
                    className={`flex items-center gap-x-2 ${commentReply ? 'ml-[170px]' : 'ml-[100px]'}`}
                    onClick={()=> {
                        handleDeleteChange()
                        document.body.classList.add('overflow-hidden')
                    }}
                    >{DeleteSvg}
                    <span className='font-medium text-base tracking-wide text-red-600 capitalize'>
                        delete
                    </span>
                </button>
{/* EDIT BTN */}
                <button 
                    className='flex items-center gap-x-2'
                    onClick={handleEditingChange}
                        >{EditSvg}
                    <span className='font-medium text-base tracking-wide capitalize text-ModerateBlue'>
                        edit
                    </span>
                </button>
                </>
            ) : 
// REPLY BTN
            <button 
            className={`flex items-center gap-x-2 text-ModerateBlue transition-opacity
                        hover:opacity-50 ${isReplying ? 'opacity-50 hover:opacity-100' : ''}`}
            onClick={handleReplyingChange}
                >{ReplySvg}
            <span className='font-medium text-base tracking-wide'>Reply</span>
            </button>}
        </header>
    )
}
