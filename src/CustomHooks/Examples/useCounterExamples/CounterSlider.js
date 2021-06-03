import useCounter from "../../useCounter";

const CounterSlider = () => {
    const { count, increement, decreement } = useCounter();

    return (
        <div className="container example-area">
            <h2>Custom useCount example 2</h2>

            <button onClick={() => decreement()}>-</button>
            <input type="range" value={count} />
            <button onClick={() => increement()}>+</button>
            <h2>{count}</h2>
        </div>
    )

}

export default CounterSlider;