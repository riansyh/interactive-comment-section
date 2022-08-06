import commentReducer from "../feature/comment/commentSlice";
import userReducer from "../feature/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        comment: commentReducer,
        user: userReducer,
    },
});

export default store;
