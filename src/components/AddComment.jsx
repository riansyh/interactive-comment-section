import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../feature/comment/commentSlice";
import { Button } from "./Button";

export const AddComment = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [payload, setPayload] = useState({
        user: user,
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(add(payload));

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
                SEND
            </Button>
        </form>
    );
};
