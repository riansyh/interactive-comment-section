import React from "react";
import { ActionButton } from "./ActionButton";
import { Button } from "./Button";
import { VoteCard } from "./VoteCard";

export const CommentCard = () => {
    return (
        <>
            <div className="card bg-white rounded-10 flex gap-6 px-6 py-6 pb-8 w-full">
                <VoteCard />
                <div className="comment flex flex-col gap-4 w-full">
                    <div className="header flex justify-between w-full items-center">
                        <div className="flex items-center gap-4">
                            <div className="avatar h-8 w-8 rounded-full overflow-hidden bg-light-grayish-blue"></div>

                            <div className="flex gap-2 items-center">
                                <p className="font-bold">User</p>
                                <p className="rounded-sm bg-moderate-blue px-1 text-white font-medium text-sm h-fit">
                                    you
                                </p>
                            </div>

                            <p className="text-grayis-blue">Time</p>
                        </div>
                        <div className="flex gap-4">
                            <ActionButton logo="./images/icon-reply.svg" color="#5259B4">
                                Repply
                            </ActionButton>
                            <ActionButton logo="./images/icon-edit.svg" color="#5259B4">
                                Edit
                            </ActionButton>
                            <ActionButton logo="./images/icon-delete.svg" color="#EE6368">
                                Delete
                            </ActionButton>
                        </div>
                    </div>
                    <p className="text-base text-grayis-blue">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sint velit
                        dolor harum doloribus explicabo, laboriosam repellendus vero, pariatur
                        aliquid quisquam recusandae commodi, cupiditate vitae dolorem qui quae error
                        eaque?
                    </p>
                </div>
            </div>
            <div className="reply-card bg-white rounded-10 flex gap-4 p-6 w-full mt-2 justify-between">
                <div className="avatar h-10 w-10 rounded-full overflow-hidden bg-light-grayish-blue"></div>
                <textarea className="input flex-grow" rows="3"></textarea>
                <Button color="#5259B4">REPLY</Button>
            </div>
        </>
    );
};
