import useList from "../../UseList";

const BasicList = () => {
    const { list, pull, push } = useList();

    return (
        <div className="container example-area">
            <h4>example 1 - <code>Add hardcoded entry</code></h4>

            <ul>
                {
                    list.map((item) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
            <button onClick={() => push("rahman")}>add Item</button>
            <button onClick={() => pull(0)}>delete first Item</button>

        </div>
    )

}

export default BasicList;