import commentReducer from "../feature/comment/commentSlice";
import userReducer from "../feature/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, commentReducer);

export const store = configureStore({
    reducer: {
        comment: persistedReducer,
        user: userReducer,
    },
    middleware: [thunk],
});

export const persistor = persistStore(store);
