import React from "react";

export const ActionButton = ({ children, logo, clickHandler, color }) => {
    return (
        <button
            onClick={clickHandler}
            className="flex gap-2 items-center font-medium hover-btn"
            style={{ color: color }}
        >
            <img src={logo} alt={`${children}-icon`} />
            {children}
        </button>
    );
};
