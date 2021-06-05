import { useRef, useState } from "react";
import { useMatchFetch } from "../../UseMatchFetch";

const DynamicTodoList = () => {
    const refUrl = useRef(null);
    const [apiUrl, setApiUrl] = useState("https://jsonplaceholder.typicode.com/todos/1");
    const renderTodoList = useMatchFetch(apiUrl);


    const submit = (event) => {
        event.preventDefault();
        console.log(' event ', event);
        setApiUrl(refUrl.current.value);
    }

    const setRef = (ref, value) => {
        ref.current.value = value
    }

    return (
        <div className="container example-area">
            <h4>example 1 - <code>Get Todo List Dynamically</code></h4>

            <form onSubmit={submit}>
                <input type="url" placeholder="enter API URL" ref={refUrl} required />

                <button type="submit" >GET</button>
            </form>

            Don't you have API url, get here : 
            <button class="link" onClick={() => setRef(refUrl, "https://jsonplaceholder.typicode.com/users")}> Users</button>
            <button class="link" onClick={() => setRef(refUrl, "https://jsonplaceholder.typicode.com/albums")}> Albums</button>

            <hr />
            {
                renderTodoList({
                    pending: () => <h2> Loading...</h2>,
                    error: (err) => <h2>{err.toString()}</h2>,
                    data: (data) => <pre>{JSON.stringify(data, null, 2)}</pre>
                })
            }
        </div>
    )

}

export default DynamicTodoList;