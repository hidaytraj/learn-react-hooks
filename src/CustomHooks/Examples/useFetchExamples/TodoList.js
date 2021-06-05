import { useMatchFetch } from "../../UseMatchFetch";

const TodoList = () => {
    const renderTodoList = useMatchFetch("https://jsonplaceholder.typicode.com/todos/1");
    return (
        <div className="container example-area">
            <h4>example 1 - <code>Show Todo List</code></h4>

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

export default TodoList;