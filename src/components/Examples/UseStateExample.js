import {useState} from "react";
const UseStateExample = () => {

    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>useState Example</h2>
            {count}
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>

    )
}

export default UseStateExample;