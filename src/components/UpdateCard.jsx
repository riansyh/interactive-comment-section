import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updated } from "../feature/comment/commentSlice";
import { Button } from "./Button";

export const UpdateCard = ({ data, id, commentId, closeEdit, type }) => {
    const dispatch = useDispatch();

    const [payload, setPayload] = useState({
        type,
        id: commentId != null ? commentId : id,
        content: data.content,
        commentId: commentId != null ? id : null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updated(payload));

        closeEdit();
        setPayload((val) => ({
            ...val,
            content: "",
        }));
    };

    return (
        <form className="flex flex-col gap-4 items-end justify-end" onSubmit={handleSubmit}>
            <textarea
                autoFocus
                className="input flex-grow w-full"
                rows="3"
                value={payload.content}
                onChange={(e) =>
                    setPayload((val) => ({
                        ...val,
                        content: e.target.value,
                    }))
                }
            ></textarea>
            <Button color="#5259B4">UPDATE</Button>
        </form>
    );
};
