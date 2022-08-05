import React from "react";

export const Button = ({ children, clickHandler, color }) => {
    return (
        <button
            className="px-4 py-3 min-w-[100px] rounded-lg font-medium uppercase text-white h-fit hover-btn"
            onClick={clickHandler}
            style={{ backgroundColor: color }}
        >
            {children}
        </button>
    );
};
