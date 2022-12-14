import { CommentCard } from "./components/CommentCard";
import { ReplyContainer } from "./components/ReplyContainer";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { AddComment } from "./components/AddComment";

function App() {
    const comments = useSelector((state) => state.comment);

    return (
        <section className="App bg-very-light-gray min-h-screen flex flex-col items-center gap-6 justify-center py-[60px] px-4">
            <div className="text-center">
                <h1 className="font-medium text-dark-blue text-2xl">Interactive Comment Section</h1>
                <p className="text-grayis-blue text-sm mt-2">
                    Created by{" "}
                    <a className="font-bold" href="https://github.com/riansyh">
                        riansyh
                    </a>{" "}
                </p>
            </div>

            <section className="max-w-[732px] w-full flex flex-col">
                {Object.values(comments).map((comment, index) => {
                    const key = Object.keys(comments)[index];

                    if (index != Object.values(comments).length - 1) {
                        if (comment.replies.length > 0) {
                            return (
                                <React.Fragment key={`comment-${index}`}>
                                    <CommentCard data={comment} type="comment" index={key} />
                                    <ReplyContainer key={`replies-${index}`}>
                                        {comment.replies.map((reply, idx) => (
                                            <CommentCard
                                                type="reply"
                                                key={`reply-${index}${idx}`}
                                                data={reply}
                                                commentId={key}
                                                index={idx}
                                            />
                                        ))}
                                    </ReplyContainer>
                                </React.Fragment>
                            );
                        } else {
                            return (
                                <CommentCard
                                    type="comment"
                                    key={`comment-${index}`}
                                    data={comment}
                                    index={key}
                                />
                            );
                        }
                    }
                })}

                <AddComment></AddComment>
            </section>
        </section>
    );
}

export default App;
