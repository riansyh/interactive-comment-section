import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replied } from "../feature/comment/commentSlice";
import { Button } from "./Button";

export const ReplyComment = ({ id, replyingTo, type, commentId, closeReply }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [payload, setPayload] = useState({
        type,
        id: commentId ? commentId : id,
        user,
        replyingTo,
        content: "",
        position: commentId ? id : null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (payload.content != "") {
            dispatch(replied(payload));

            closeReply();
            setPayload((val) => ({
                ...val,
                content: "",
            }));
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="reply-card bg-white rounded-10 flex flex-col md:flex-row gap-4 p-6 w-full mt-2 justify-between"
        >
            <div className="avatar h-10 w-10 rounded-full flex-grow-0 hidden md:block overflow-hidden bg-light-grayish-blue">
                <img src={user.image.png} alt="avatar" />
            </div>

            <textarea
                autoFocus
                className="input flex-grow"
                rows="3"
                placeholder="Add a reply..."
                value={payload.content}
                onChange={(e) =>
                    setPayload((val) => ({
                        ...val,
                        content: e.target.value,
                    }))
                }
            ></textarea>

            <div className="flex items-center md:items-start justify-between w-full md:w-fit">
                <div className="avatar h-10 w-10 rounded-full flex-grow-0 md:hidden overflow-hidden bg-light-grayish-blue">
                    <img src={user.image.png} alt="avatar" />
                </div>

                <Button color={payload.content != "" ? "#5259B4" : "rgb(153 157 203)"} submit>
                    REPLY
                </Button>
            </div>
        </form>
    );
};
