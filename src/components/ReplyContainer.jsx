import React from "react";

export const ReplyContainer = ({ children }) => {
    return (
        <div className="ml-2 pl-4 md:ml-10 md:pl-10 border-l-2 border-light-gray flex flex-col gap-4 my-4">
            {children}
        </div>
    );
};
