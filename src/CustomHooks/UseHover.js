import { useState } from "react"

const useHover = () => {
    const [hoverStatus, setHoverStatus] = useState(false);

    const doMouseHover = () => {
        setHoverStatus(true);
        console.log( ' hoverStatus ', hoverStatus);
    }

    const doMouseOut = () => {
        setHoverStatus(false);
    }

    return {
        isHover: hoverStatus,
        doMouseHover,
        doMouseOut

    }
}

export default useHover;