import React from "react";

export const ReplyContainer = ({ children }) => {
    return (
        <div className="ml-10 pl-10 border-l-2 border-light-gray flex flex-col gap-4 my-4">
            {children}
        </div>
    );
};
