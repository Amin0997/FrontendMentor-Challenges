import { useState } from "react";

export default function DeleteModal({ id, userName, onDelete, onDeleteChange }) {
    const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);

    const handleDeleteChange = () => {
        setIsDeleteConfirmationVisible(false)
        onDeleteChange(false)
    }

    return (
        <div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-slate-700 bg-opacity-70'>
                <div className='w-[400px] h-64 bg-white rounded-xl p-8 grid grid-cols-2 gap-x-3'>
                    <h3 className='text-2xl font-bold col-span-2'>Delete comment</h3>
                    <p className='text-GrayishBlue col-span-2 leading-6 -mt-2'>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                    <button 
                        className='uppercase bg-gray-600 rounded-lg text-white'
                        onClick={() => {
                            document.body.classList.remove('overflow-hidden')
                            handleDeleteChange()
                        }}
                    >no, cancel
                    </button>
                    <button 
                        className='uppercase bg-red-600 rounded-lg text-white'
                        onClick={() => {
                            localStorage.removeItem(`${userName}-${id}`);
                            onDelete(id)
                            document.body.classList.remove('overflow-hidden')
                            handleDeleteChange()
                        }}
                    >yes, delete
                    </button>
                </div>
            </div>
    )
}
