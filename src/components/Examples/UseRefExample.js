import {useEffect, useRef} from "react";
const UseRefExample = () => {

    const nameRef = useRef(null);

    useEffect( () => {
        console.log(nameRef);
        nameRef.current.focus();
        nameRef.current.style.border = "1px solid green"
    }, [])

    return (
        <div>
            <h2>useRef Example</h2>
            <input type="text" ref={nameRef} />
        </div>

    )
}

export default UseRefExample;