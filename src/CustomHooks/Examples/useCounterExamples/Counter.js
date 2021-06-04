import useCounter from "../../useCounter";


const Counter = () => {
    const {count, increement, decreement} = useCounter();

    return (
        <div className="container example-area">
            <h4>example 1</h4>
            <button onClick={() => increement()}>++</button>
            <button onClick={() => decreement()}>--</button>
            <h2>{count}</h2>
        </div>
    )

}

export default Counter;