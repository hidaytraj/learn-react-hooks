import { useState } from "react"

const useCounter = () => {
    const [count, setCount] = useState(0);

    const increement = () => {
        setCount(count + 1)
    }

    const decreement = () => {
        setCount(count - 1)
    }

    return {
        count: count,
        increement,
        decreement
    }
}

export default useCounter;