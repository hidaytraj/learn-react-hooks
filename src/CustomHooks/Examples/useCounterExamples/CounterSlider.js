import useCounter from "../../useCounter";

const CounterSlider = () => {
    const { count, increement, decreement } = useCounter();

    return (
        <div className="container example-area">
            <h4>example 2</h4>

            <button onClick={() => decreement()}>-</button>
            <input type="range" value={count} />
            <button onClick={() => increement()}>+</button>
            <h2>{count}</h2>
        </div>
    )

}

export default CounterSlider;