import { useRef } from "react";
import useList from "../../UseList";

const DynamicList = () => {
    const subjectField = useRef();

    const { list, pull, push } = useList();

    const setSubject = () => {
        push(subjectField.current.value);
        subjectField.current.value = "";
        subjectField.current.focus();
    }

    return (
        <div className="container example-area">
            <h4>example 2- <code>Add dynamic entry</code></h4>

            <input type="text" ref={subjectField} />
            <button onClick={() => setSubject()}>add Item</button>

            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}><label>{item}</label> <button onClick={() => pull(index)}>Delete</button></li>
                    })
                }
            </ul>

        </div>
    )

}

export default DynamicList;