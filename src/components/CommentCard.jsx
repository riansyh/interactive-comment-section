import React, { useState, useEffect } from "react";
import { ActionButton } from "./ActionButton";
import { Modal } from "./Modal";
import { VoteCard } from "./VoteCard";
import { useDispatch, useSelector } from "react-redux";
import { deleted } from "../feature/comment/commentSlice";
import { ReplyComment } from "./ReplyComment";
import { UpdateCard } from "./UpdateCard";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

export const CommentCard = ({ data, type, commentId = null, index }) => {
    const [isReplying, setIsReplying] = useState(false);
    const [isOwnReply, setIsOwnReply] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data.user.username == user.username) {
            setIsOwnReply(true);
        }
    }, []);

    const deleteComment = () => {
        setShowModal(false);
        dispatch(
            deleted({
                type,
                id: index,
                commentId,
            })
        );
    };

    return (
        <>
            <Modal
                show={showModal}
                handleClose={() => setShowModal(false)}
                handleDelete={deleteComment}
            ></Modal>
            <div
                className="comment card bg-white rounded-10 flex gap-6 p-6 w-full mt-4"
                style={{ marginTop: type != "comment" ? "0" : "" }}
            >
                <div className="hidden md:block">
                    <VoteCard score={data.score} type={type} id={index} commentId={commentId} />
                </div>
                <div className="comment flex flex-col gap-4 w-full">
                    <div className="header flex justify-between w-full items-center">
                        <div className="flex items-center gap-4">
                            <div className="avatar h-8 w-8 rounded-full overflow-hidden bg-light-grayish-blue flex-grow-0">
                                <img src={data.user.image.png} alt="avatar" />
                            </div>

                            <div className="flex gap-2 items-center">
                                <p className="font-bold">{data.user.username}</p>
                                {isOwnReply && (
                                    <p className="rounded-sm bg-moderate-blue px-1 text-white font-medium text-sm h-fit">
                                        you
                                    </p>
                                )}
                            </div>

                            <p className="text-grayis-blue text-sm">{data.createdAt}</p>
                        </div>
                        <div className="hidden gap-4 md:flex">
                            {isOwnReply ? (
                                <>
                                    <ActionButton
                                        logo="./images/icon-delete.svg"
                                        color="#EE6368"
                                        clickHandler={() => setShowModal(true)}
                                    >
                                        Delete
                                    </ActionButton>
                                    {isEditing ? (
                                        <ActionButton
                                            logo="./images/icon-x.svg"
                                            color="#5b5b5b"
                                            clickHandler={() => setIsEditing(!isEditing)}
                                        >
                                            Cancel
                                        </ActionButton>
                                    ) : (
                                        <ActionButton
                                            logo="./images/icon-edit.svg"
                                            color="#5259B4"
                                            clickHandler={() => setIsEditing(!isEditing)}
                                        >
                                            Edit
                                        </ActionButton>
                                    )}
                                </>
                            ) : isReplying ? (
                                <ActionButton
                                    logo="./images/icon-x.svg"
                                    color="#5b5b5b"
                                    clickHandler={() => setIsReplying(!isReplying)}
                                >
                                    Cancel
                                </ActionButton>
                            ) : (
                                <ActionButton
                                    logo="./images/icon-reply.svg"
                                    color="#5259B4"
                                    clickHandler={() => setIsReplying(!isReplying)}
                                >
                                    Reply
                                </ActionButton>
                            )}
                        </div>
                    </div>
                    {isEditing ? (
                        <UpdateCard
                            data={data}
                            id={index}
                            commentId={commentId}
                            type={type}
                            closeEdit={() => setIsEditing(false)}
                        />
                    ) : (
                        <p className="text-base text-grayis-blue">
                            <span className="font-bold text-moderate-blue">
                                {data.replyingTo && `@${data.replyingTo}`}
                            </span>{" "}
                            {data.content}
                        </p>
                    )}
                    <div className="flex justify-between md:hidden">
                        <VoteCard score={data.score} type={type} id={index} commentId={commentId} />
                        <div className="flex gap-3">
                            {isOwnReply ? (
                                <>
                                    <ActionButton
                                        logo="./images/icon-delete.svg"
                                        color="#EE6368"
                                        clickHandler={() => setShowModal(true)}
                                    >
                                        Delete
                                    </ActionButton>
                                    {isEditing ? (
                                        <ActionButton
                                            logo="./images/icon-x.svg"
                                            color="#5b5b5b"
                                            clickHandler={() => setIsEditing(!isEditing)}
                                        >
                                            Cancel
                                        </ActionButton>
                                    ) : (
                                        <ActionButton
                                            logo="./images/icon-edit.svg"
                                            color="#5259B4"
                                            clickHandler={() => setIsEditing(!isEditing)}
                                        >
                                            Edit
                                        </ActionButton>
                                    )}
                                </>
                            ) : isReplying ? (
                                <ActionButton
                                    logo="./images/icon-x.svg"
                                    color="#5b5b5b"
                                    clickHandler={() => setIsReplying(!isReplying)}
                                >
                                    Cancel
                                </ActionButton>
                            ) : (
                                <ActionButton
                                    logo="./images/icon-reply.svg"
                                    color="#5259B4"
                                    clickHandler={() => setIsReplying(!isReplying)}
                                >
                                    Reply
                                </ActionButton>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isReplying && (
                <ReplyComment
                    id={index}
                    replyingTo={data.user.username}
                    type={type}
                    commentId={commentId}
                    closeReply={() => setIsReplying(false)}
                />
            )}
        </>
    );
};
