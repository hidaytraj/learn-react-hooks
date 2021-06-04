import { useEffect } from "react";

const useOutsideClick = (parentContainer, ref, callback) => {

    useEffect(() => {
        const clickHandler = (event) => {
            if (
                ref.current &&
                ref.current.contains(event.target) === false) {
                callback();
            }

        };

        if (parentContainer.current) {
            parentContainer.current.addEventListener("click", clickHandler);
        } else {
            document.addEventListener("click", clickHandler);
            console.error("Please provide parent ref in useOutsideClick first argument, Which not contains a button you clicking")
        }



        return () => {
            if (parentContainer.current) {
                parentContainer.current.removeEventListener("click", clickHandler)
            }
        }

    }, [ref, callback, parentContainer]);

    return null;
}

export default useOutsideClick;