import React, { useState } from "react";
import { upvoted, downvoted } from "../feature/comment/commentSlice";
import { useDispatch } from "react-redux";

export const VoteCard = ({ score, id, commentId, type }) => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState("");

    const payload = {
        type,
        id,
        commentId: commentId != null ? commentId : null,
    };

    const handleClickVote = (type) => {
        if (status == "") {
            switch (type) {
                case "plus":
                    dispatch(upvoted(payload));
                    setStatus("plus");
                    break;
                case "minus":
                    dispatch(downvoted(payload));
                    setStatus("minus");

                    break;
            }
        } else {
            switch (type) {
                case "plus":
                    if (status == "plus") {
                        dispatch(downvoted(payload));
                        setStatus("");
                    } else {
                        dispatch(upvoted(payload));
                        dispatch(upvoted(payload));
                        setStatus("plus");
                    }
                    break;
                case "minus":
                    if (status == "minus") {
                        dispatch(upvoted(payload));
                        setStatus("");
                    } else {
                        dispatch(downvoted(payload));
                        dispatch(downvoted(payload));
                        setStatus("minus");
                    }
                    break;
            }
        }
    };

    return (
        <div className="bg-very-light-gray rounded-10 flex md:flex-col gap-1 p-3 text-base text-moderate-blue flex-grow-0 h-fit justify-center items-center">
            <button
                className="flex items-center justify-center h-5 w-5 rounded-md transition-all duration-300"
                onClick={() => handleClickVote("plus")}
                style={{ backgroundColor: status == "plus" ? "hsl(211, 10%, 90%)" : "" }}
            >
                <img
                    src="./images/icon-plus.svg"
                    alt="plus-button"
                    className="text-moderate-blue"
                />
            </button>
            <p className="font-bold text-moderate-blue w-5 text-center">{score}</p>
            <button
                className="flex items-center justify-center h-5 w-5 rounded-md transition-all duration-300"
                onClick={() => handleClickVote("minus")}
                style={{ backgroundColor: status == "minus" ? "hsl(211, 10%, 90%)" : "" }}
            >
                <img
                    src="./images/icon-minus.svg"
                    alt="plus-button"
                    className="text-moderate-blue"
                />
            </button>
        </div>
    );
};
