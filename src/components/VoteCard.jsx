import React from "react";

export const VoteCard = () => {
    return (
        <div className="bg-very-light-gray rounded-10 flex flex-col gap-1 p-3 text-base text-moderate-blue flex-grow-0 h-fit justify-center items-center">
            <button className="flex items-center justify-center h-5 w-4">
                <img
                    src="./images/icon-plus.svg"
                    alt="plus-button"
                    className="text-moderate-blue"
                />
            </button>
            <p className="font-bold text-moderate-blue">12</p>
            <button className="flex items-center justify-center h-5 w-4">
                <img
                    src="./images/icon-minus.svg"
                    alt="plus-button"
                    className="text-moderate-blue"
                />
            </button>
        </div>
    );
};
