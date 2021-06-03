import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogDetails = (props) => {
    const { match } = props;
    const [postDetails, setPostDetails] = useState([]);
    const [detectChanges, setDetectChanges] = useState(match.params.id);
    console.log(' detectChanges ', detectChanges);
    const [postComments, setPostComments] = useState([]);
    const [status, setStatus] = useState("");
    const [loading, toggleLoading] = useState(true);

    useEffect(() => {
        const postPromise = axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
        // .catch((error) => {
        //     console.log("Error: ", error);
        //     setStatus("Please contact to administrator")
        // });


        const commentPromise = axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}/comments`);

        // will hold both response
        Promise.all([postPromise, commentPromise]).then((response) => {
            console.log(' response ', response);
            setPostDetails([response[0].data]);
            setPostComments(response[1].data);
            console.log(postDetails, 'postDetails')
            toggleLoading(false);
        }).catch((error) => {
            toggleLoading(false);
            console.log("Errorsss: ", error);
            setStatus("Please contact to administrator")
        });


    }, [match.params.id]);


    const render = () => {

        if (loading) {
            return (
                <h2>loading.....</h2>
            )
        } else {
            return (
                <div>
                    {
                        postDetails ?
                            postDetails.map((post, index) => {
                                return (
                                    <div className="alert alert-warning" key={index}>
                                        <h2>{post.title}</h2>
                                        <p>{post.body}</p>
                                    </div>
                                )
                            })

                            : null
                    }


                    {
                        postComments ?
                            postComments.map((comment) => {
                                return (
                                    <div key={comment.id} className="alert alert-dark">
                                        <h4>{comment.email}</h4>
                                        <p>{comment.body}</p>
                                    </div>
                                )
                            }) : null
                    }
                </div>
            )
        }

    }

    return (
        <div>
            <h1 className="h1">Blog {match.params.id}</h1>

            <Link to="/blog">Back</Link>

            {render()}

            { status && <div className="alert alert-danger">{status}</div>}

            <div className="row">
                {
                    match.params.id !== "1" ?
                        <div className="col-6">
                            <Link to={`/blogs/${parseInt(match.params.id) - 1}`}>Previous</Link>
                        </div> : null
                }

                <div className="col-6">
                    <Link to={`/blogs/${parseInt(match.params.id) + 1}`}>Next</Link>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;