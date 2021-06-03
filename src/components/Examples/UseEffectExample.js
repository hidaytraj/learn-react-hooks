import { useState, useEffect } from "react";
const UseEffectExample = () => {

    const [count, setCount] = useState(0);

    const [toggle, setToggle] = useState(false);

    const [message, setMessage] = useState("No Message");

    // no dependencies => this will render on every state change
    useEffect(() => {
        console.log('Everytime');
    });

    // empty dependency => this will render once
    useEffect(() => {
        console.log('One time');
    }, []);

    // count dependency also component will mount=> render when count changes
    useEffect(() => {
        console.log('Count executed')

        // componentWillMount = if you return a method inside a useEffect considered as componentWillMount and it will call before the main block function
        return () => {
            console.log('Count is started')
        }
    }, [count]);

    // toggle dependency => render when toggle changes
    useEffect(() => {
        console.log('toggle executed')
    }, [toggle]);


    return (
        <div>
            <h2>UseEffects Example</h2>

            <div className="row">
                <div className="col-6 mr-2">
                    {count}
                </div>
                <div className="col-6">
                    <button className="btn btn-secondary" onClick={() => setCount(count + 1)}>Add</button>
                </div>


                <div className="col-12">
                    <button className="btn btn-secondary" onClick={() => {
                        setMessage("Toggle Status has been changes " + toggle);
                        setToggle(!toggle)
                    }}>
                        {toggle ? "Yes" : "No"}
                    </button>
                </div>

                <div className="col-12">
                <div className="alert alert-success">{message}</div>
                    </div>
            </div>
        </div>

    )
}

export default UseEffectExample;