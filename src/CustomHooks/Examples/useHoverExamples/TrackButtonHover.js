import { useEffect, useState } from "react";
import useHover from "../../UseHover";

const TrackButtonHover = () => {
    const { isHover, doMouseHover, doMouseOut } = useHover();

    const [recordHover, setRecordHover] = useState(0);

    useEffect(() => {
        if (isHover == true) {
            setRecordHover(recordHover + 1)
        }
    }, [isHover]);


    return (
        <div className="container example-area">
            <h4>example 2 - <code>Track my premium button</code></h4>

            <div>
                <button onMouseEnter={() => { doMouseHover() }}
                    onMouseOut={() => doMouseOut()}
                    disabled={recordHover > 9}
                    >Use me for 10 times time</button>

                {
                    recordHover > 9 ?
                        <div>
                            <small>You've exceeds the hover limit please renew the plan</small>
                            <br />
                            <button onClick={() => setRecordHover(0)}>Renew Now</button>
                        </div>
                        : null
                }

                <h5>This button is hovered {recordHover} times</h5>
            </div>


        </div>
    )

}

export default TrackButtonHover;