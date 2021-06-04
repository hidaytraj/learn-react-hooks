import { useRef, useState } from "react";
import useOutsideClick from "../../useOutsideClick";
import "./CustomModel.css";

const CustomModel = () => {
    const [showModel, setShowModel] = useState(false);
    const myModel = useRef(null);
    const mainContainer = useRef(null);

    useOutsideClick(mainContainer, myModel, () => {
        console.log("Outside click");
        setShowModel(false);
    });


    const modelHandler = () => {
        setShowModel(true);
    }

    return (
        <div className="container example-area">
            <h4>example 1 - <code>Close model by clicking outside of content area</code></h4>

            <button onClick={() => modelHandler()}>Open Model</button>

            <div ref={mainContainer}>
                {showModel && <div className="model-container">
                    <div className="model-content" ref={myModel}>
                        <h2>Love to see you again :)</h2>
                        <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator</p>
                    </div>
                </div>
                }
            </div>


        </div>
    )

}

export default CustomModel;