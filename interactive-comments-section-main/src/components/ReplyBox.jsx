import { useState, useEffect } from 'react';
import { PlusSvg, MinusSvg, EditSvg, DeleteSvg, ReplySvg } from '../assets/images/SvgIcons'
import IncrementDecrementBtns from '../helpers/IncrementDecrementBtns';
import Header from './Header';
import DeleteModal from '../helpers/DeleteModal';
import EditTextarea from '../helpers/EditTextarea';
import ReplyingTextArea from '../helpers/ReplyingTextArea';

export default function ReplyBox({ 
    id, 
    content,
    replyingTo,
    createdAt, 
    score, 
    userImg, 
    userName, 
    onReply, 
    currentUserName, 
    currentUserImg, 
    onDelete,
    onEdit }) {

    // reply comment score
    const [count, setCount] = useState(score);

    // edit btn status
    const [isEditing, setIsEditing] = useState(false);

    // reply btn status
    const [isReplying, setIsReplying] = useState(false);

    // add comment
    const [commentEditing, setCommentEditing] = useState(content);
    
    // modal status
    const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);

    const replyName = `@${replyingTo}`;

    return (
        <>
        <div id={id} className="reply-box">

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
                    <span className="text-ModerateBlue font-semibold mr-1">
                        {replyName}
                    </span>
                    {content}
                </p>
            }
        </div>

        {isReplying && (
            <ReplyingTextArea
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
