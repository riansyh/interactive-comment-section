import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { CSSTransition } from "react-transition-group";

export const Modal = ({ show, handleClose, handleDelete }) => {
    show ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");

    return createPortal(
        <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
            <section
                className="modal w-full h-full fixed bg-black bg-opacity-50 flex items-center justify-center"
                onClick={handleClose}
            >
                <div
                    className="modal-content px-8 py-6 bg-white rounded-10 w-full max-w-[400px] mx-3"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className="font-bold text-2xl text-dark-blue">Delete comment</h2>
                    <p className="text-grayis-blue mt-4">
                        Are you sure want to delete this comment? This will remove the comment and
                        can't be undone
                    </p>
                    <div className="actions mt-3 flex justify-between gap-3">
                        <Button color="#68727E" isModalButton clickHandler={handleClose}>
                            No, Cancel
                        </Button>
                        <Button color="#EE6368" isModalButton clickHandler={handleDelete}>
                            Yes, Delete
                        </Button>
                    </div>
                </div>
            </section>
        </CSSTransition>,
        document.getElementById("modal")
    );
};
