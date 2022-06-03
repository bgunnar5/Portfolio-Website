import React, { useEffect, useRef } from "react";

// Hook that alerts clicks outside of the passed ref
const useOutsideAlerter = ({ref, onClickAway, closeCallback}) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickAway();
                if (closeCallback) {
                    closeCallback();
                }
            }
        }

        // Bind event Listener
        document.addEventListener("mousedown", handleClickOutside);

        // Unbind event Listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClickAway, closeCallback])
}

export default function ClickAway({
    onClickAway,
    closeCallback,
    contents,
    ...rest
}) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, onClickAway, closeCallback);

    return (
        <div ref={wrapperRef} {...rest}>
            {contents}
        </div>
    );
}