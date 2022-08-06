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

        dispatch(replied(payload));

        closeReply();
        setPayload((val) => ({
            ...val,
            content: "",
        }));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="reply-card bg-white rounded-10 flex gap-4 p-6 w-full mt-2 justify-between"
        >
            <div className="avatar h-10 w-10 rounded-full overflow-hidden bg-light-grayish-blue">
                <img src={user.image.png} alt="avatar" />
            </div>

            <textarea
                autoFocus
                className="input flex-grow"
                rows="3"
                value={payload.content}
                onChange={(e) =>
                    setPayload((val) => ({
                        ...val,
                        content: e.target.value,
                    }))
                }
            ></textarea>
            <Button color="#5259B4" submit>
                REPLY
            </Button>
        </form>
    );
};
