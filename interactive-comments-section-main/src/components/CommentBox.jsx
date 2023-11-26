import { useState } from 'react';
import IncrementDecrementBtns from '../helpers/IncrementDecrementBtns';
import Header from './Header';
import DeleteModal from '../helpers/DeleteModal';
import EditTextarea from '../helpers/EditTextarea';
import ReplyingTextArea from '../helpers/ReplyingTextArea';

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
    onEdit,
    commentReply
    }) {

    // comment score
    const [count, setCount] = useState(score);

    // edit btn status
    const [isEditing, setIsEditing] = useState(false);

    // reply btn status
    const [isReplying, setIsReplying] = useState(false);

    // edit comment
    const [commentEditing, setCommentEditing] = useState(content);

    // modal status
    const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);


    return (
        <>
        <div id={id} className="comment-box">

            <IncrementDecrementBtns 
                score={score}
                userName={userName}
                id={id}
            />

            <Header 
                userImg = {userImg}
                userName = {userName}
                currentUserName = {currentUserName}
                createdAt = {createdAt}
                id={id}
                onEditingChange={setIsEditing}
                onReplyingChange={setIsReplying}
                onDeleteChange={setIsDeleteConfirmationVisible}
                commentReply={commentReply}
            />

            {isEditing ? 
                <EditTextarea
                    id={id}
                    content={content}
                    onCommetEditingChange={setCommentEditing}
                    onEditingChange={setIsEditing}
                    onEdit={onEdit}
                />
            :
                <p className='col-start-2 text-base font-normal text-GrayishBlue'>
                    {content}
                </p>
            }
        </div>

        {isReplying && (
            <ReplyingTextArea
                commentReply={commentReply}
                id = {id}
                currentUserImg = {currentUserImg}
                userName = {userName}
                onReply = {onReply}
                count = {count}
                onReplyingChange = {setIsReplying}
            />
        )}

        {isDeleteConfirmationVisible && (
            <DeleteModal
                onDeleteChange={setIsDeleteConfirmationVisible}
                id={id}
                userName={userName}
                onDelete={onDelete}
                />
        )}
        </>
    )
}
