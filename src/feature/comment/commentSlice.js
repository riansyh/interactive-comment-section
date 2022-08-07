import { createSlice } from "@reduxjs/toolkit";
import { now } from "moment";

const initialState = [
    {
        id: 1,
        content:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: "1 month ago",
        score: 12,
        user: {
            image: {
                png: "./images/avatars/image-amyrobson.png",
                webp: "./images/avatars/image-amyrobson.webp",
            },
            username: "amyrobson",
        },
        replies: [],
    },
    {
        id: 2,
        content:
            "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: "2 weeks ago",
        score: 5,
        user: {
            image: {
                png: "./images/avatars/image-maxblagun.png",
                webp: "./images/avatars/image-maxblagun.webp",
            },
            username: "maxblagun",
        },
        replies: [
            {
                id: 1,
                content:
                    "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                createdAt: "1 week ago",
                score: 4,
                replyingTo: "maxblagun",
                user: {
                    image: {
                        png: "./images/avatars/image-ramsesmiron.png",
                        webp: "./images/avatars/image-ramsesmiron.webp",
                    },
                    username: "ramsesmiron",
                },
            },
            {
                id: 2,
                content:
                    "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                createdAt: "2 days ago",
                score: 2,
                replyingTo: "ramsesmiron",
                user: {
                    image: {
                        png: "./images/avatars/image-juliusomo.png",
                        webp: "./images/avatars/image-juliusomo.webp",
                    },
                    username: "juliusomo",
                },
            },
        ],
    },
];

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        add: (state, action) => {
            state[Object.keys(state).length] = {
                id: state.length + 1,
                content: action.payload.content,
                createdAt: Date(),
                score: 0,
                user: action.payload.user,
                replies: [],
            };
        },
        replied: (state, action) => {
            const index =
                action.payload.position != null
                    ? action.payload.position + 1
                    : state[action.payload.id].replies.length;

            const reply = {
                id: state[action.payload.id].replies.length + 1,
                content: action.payload.content,
                createdAt: "Just now",
                score: 0,
                user: action.payload.user,
                replyingTo: action.payload.replyingTo,
            };

            state[action.payload.id].replies.splice(index, 0, reply);
        },
        updated: (state, action) => {
            if (action.payload.type == "comment") {
                state[action.payload.id].content = action.payload.content;
            } else {
                state[action.payload.id].replies[action.payload.commentId].content =
                    action.payload.content;
            }
        },
        deleted: (state, action) => {
            if (action.payload.type == "comment") {
                const newState = { ...state };
                delete newState[action.payload.id];

                return newState;
            } else {
                const newComment = {
                    ...state[action.payload.commentId],
                    replies: state[action.payload.commentId].replies.filter(
                        (comment, index) => index != action.payload.id
                    ),
                };

                state[action.payload.commentId] = newComment;
            }
        },
        upvoted: (state, action) => {
            if (action.payload.type == "comment") {
                state[action.payload.id].score += 1;
            } else {
                state[action.payload.commentId].replies[action.payload.id].score += 1;
            }
        },
        downvoted: (state, action) => {
            if (action.payload.type == "comment") {
                state[action.payload.id].score -= 1;
            } else if (state[action.payload.commentId].replies[action.payload.id].score > 0) {
                state[action.payload.commentId].replies[action.payload.id].score -= 1;
            }
        },
    },
});

export default commentSlice.reducer;
export const { add, replied, updated, deleted, downvoted, upvoted } = commentSlice.actions;
