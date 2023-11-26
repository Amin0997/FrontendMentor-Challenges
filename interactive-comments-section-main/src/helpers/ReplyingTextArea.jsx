import { useState } from "react"


export default function ReplyingTextArea({ 
    id, 
    count, 
    currentUserImg, 
    userName, 
    onReply, 
    onReplyingChange, 
    commentReply,
    }) {
    const [comment, setComment] = useState(`@${userName} `);

    const handleReply = () => {
        const commentText = comment.trim().split(" ").slice(1).join(' ');
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
        onReplyingChange(false);
    };

    return (
        <section className={`${commentReply ? 'w-[730px]' : 'ml-12 w-[640px]'}  h-[145px] p-6 mt-2 mb-2 bg-white flex rounded-lg`}>
                <img src={currentUserImg} alt="" className='h-10 mr-4'/>
                <textarea 
                    className='w-[520px] h-24 py-2.5 px-5 -mt-1 mr-4 border-2 border-VeryLightGray rounded-lg resize-none overflow-auto'
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
    )
}
