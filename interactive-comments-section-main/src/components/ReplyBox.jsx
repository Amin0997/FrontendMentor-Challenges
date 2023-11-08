import { useState } from 'react';
import { PlusSvg, MinusSvg, EditSvg, DeleteSvg, ReplySvg } from '../assets/images/SvgIcons'
import avatar from '../assets/images/avatars/image-juliusomo.png'

export default function ReplyBox({ id, content, createdAt, score, userImg, userName}) {
    const lsNum = parseInt(localStorage.getItem(userName));
    const [count, setCount] = useState(lsNum ? lsNum : score);
    // reply btn status
    const [isReplying, setIsReplying] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    // add comment
    const replyingToUser = userName ? `@${userName}, ` : "";
    const [comment, setComment] = useState(replyingToUser);

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

    return (
        <div className='border-l-2 py-2 ml-10'>
        <div id={id} className="w-[640px] min-h-[170px] grid grid-cols-custom grid-rows-custom items-center rounded-xl bg-white
                                ml-12 px-6 py-6 gap-x-6 ">
            <section className="h-[100px] flex flex-col row-span-2 justify-center items-center -mt-7 gap-y-2 bg-VeryLightGray rounded-xl">
                <button 
                    className='fill-LightGrayishBlue px-1 py-2 hover:fill-GrayishBlue'
                    onClick={increment}
                    >
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
                <button 
                    className={`flex items-center relative gap-x-2 text-ModerateBlue tracking-tighter transition-opacity
                                hover:opacity-50 ${isButtonClicked ? 'opacity-50 hover:opacity-100' : ''}`}
                    onClick={() => {
                        setIsReplying(!isReplying)
                        setIsButtonClicked(!isButtonClicked)
                    }}>
                    {ReplySvg}
                    <span className=' font-medium text-base tracking-wide'>Reply</span>
                </button>
            </header>

            <p className='flex col-start-2 text-base font-normal text-GrayishBlue'>
                {content}
            </p>
        </div>

        {isReplying && (
            <section className='w-[640px] h-[145px p-6 mt-2 ml-12 bg-white flex rounded-lg'>
                <img src={avatar} alt="" className='h-10 mr-4'/>
                <textarea 
                    className='w-[420px] h-24 py-2.5 px-5 -mt-1 mr-4 border-2 border-VeryLightGray rounded-lg resize-none'
                    name="" 
                    id=""
                    value={comment}
                    onChange={(e) => {setComment(e.target.value)}}
                    >
                        {replyingToUser}
                    </textarea>
                    <button className='w-[105px] h-[48px] rounded-lg bg-ModerateBlue uppercase text-white -mt-1'>reply</button>
            </section>
        )}
        </div>
    )
}
