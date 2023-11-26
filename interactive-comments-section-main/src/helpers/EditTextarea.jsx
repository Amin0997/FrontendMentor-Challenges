import { useState } from "react";

export default function EditTextarea({ onEdit, id, onCommetEditingChange, onEditingChange, content}) {

    const [isEditing, setIsEditing] = useState(false);
    const [commentEditing, setCommentEditing] = useState(content);

    const handleEdit = () => {
        onEdit({
            id,
            content: commentEditing,
        });
        onCommetEditingChange(commentEditing);
        onEditingChange(false);
    }

    return (
        <div className='flex gap-y-2'>
                    <textarea
                        className='w-[80%] h-24 py-2.5 px-5 -mt-1 mr-4 border-2 border-VeryLightGray rounded-lg resize-none'
                        value={commentEditing}
                        onChange={(e) => setCommentEditing(e.target.value)}
                    />
                    <button 
                        className='w-[95px] h-[48px] rounded-lg bg-ModerateBlue uppercase text-white'
                        onClick={handleEdit}
                            >update
                    </button>
                </div>
    )
}
