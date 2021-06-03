import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {

    const [blogList, setBlogList] = useState([]);


    useEffect(() => {
        // API
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((data) => {
                console.log('data ', data);
                setBlogList(data.data);
            })
            .catch((err) => {
                console.log("hidy err : ", err);
            });
    }, []);


    return (
        <div>
            <h1>Blog List</h1>


            <ul>
                {
                    blogList.map((item) => {
                        return (
                            <li key={item.id}>
                               

                                <Link to={`/blogs/${item.id}`}>
                                {item.title}
                                </Link>
                            </li>
                        )
                    })
                }

            </ul>

        </div>
    );
}

export default BlogList;