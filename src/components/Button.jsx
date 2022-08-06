import React from "react";

export const Button = ({ children, clickHandler, color, isModalButton, submit }) => {
    return (
        <button
            type={submit ? "submit" : ""}
            className="px-4 py-3 min-w-[100px] rounded-lg font-medium uppercase text-white h-fit w-fit hover-btn"
            onClick={clickHandler}
            style={{ backgroundColor: color, width: isModalButton ? "100%" : "fit" }}
        >
            {children}
        </button>
    );
};
