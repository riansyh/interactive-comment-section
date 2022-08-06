import React, { useState, useEffect } from "react";
import { ActionButton } from "./ActionButton";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { VoteCard } from "./VoteCard";

export const CommentCard = () => {
    const [isReplying, setIsReplying] = useState(false);
    const [isOwnReply, setIsOwnReply] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Modal show={showModal} handleClose={() => setShowModal(false)}></Modal>
            <div className="card bg-white rounded-10 flex gap-6 p-6 w-full">
                <VoteCard />
                <div className="comment flex flex-col gap-4 w-full">
                    <div className="header flex justify-between w-full items-center">
                        <div className="flex items-center gap-4">
                            <div className="avatar h-8 w-8 rounded-full overflow-hidden bg-light-grayish-blue"></div>

                            <div className="flex gap-2 items-center">
                                <p className="font-bold">User</p>
                                {isOwnReply && (
                                    <p className="rounded-sm bg-moderate-blue px-1 text-white font-medium text-sm h-fit">
                                        you
                                    </p>
                                )}
                            </div>

                            <p className="text-grayis-blue">Time</p>
                        </div>
                        <div className="flex gap-4">
                            {isOwnReply ? (
                                <>
                                    <ActionButton
                                        logo="./images/icon-delete.svg"
                                        color="#EE6368"
                                        clickHandler={() => setShowModal(true)}
                                    >
                                        Delete
                                    </ActionButton>
                                    <ActionButton
                                        logo="./images/icon-edit.svg"
                                        color="#5259B4"
                                        clickHandler={() => setIsEditing(!isEditing)}
                                    >
                                        Edit
                                    </ActionButton>
                                </>
                            ) : (
                                <ActionButton
                                    logo="./images/icon-reply.svg"
                                    color="#5259B4"
                                    clickHandler={() => setIsReplying(!isReplying)}
                                >
                                    Repply
                                </ActionButton>
                            )}
                        </div>
                    </div>
                    {isEditing ? (
                        <div className="flex flex-col gap-4 items-end justify-end">
                            <textarea className="input flex-grow w-full" rows="3"></textarea>
                            <Button color="#5259B4">UPDATE</Button>
                        </div>
                    ) : (
                        <p className="text-base text-grayis-blue">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sint
                            velit dolor harum doloribus explicabo, laboriosam repellendus vero,
                            pariatur aliquid quisquam recusandae commodi, cupiditate vitae dolorem
                            qui quae error eaque?
                        </p>
                    )}
                </div>
            </div>
            {isReplying && (
                <div className="reply-card bg-white rounded-10 flex gap-4 p-6 w-full mt-2 justify-between">
                    <div className="avatar h-10 w-10 rounded-full overflow-hidden bg-light-grayish-blue"></div>
                    <textarea className="input flex-grow" rows="3"></textarea>
                    <Button color="#5259B4">REPLY</Button>
                </div>
            )}
        </>
    );
};
