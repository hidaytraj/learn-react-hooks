import useHover from "../../UseHover";

const ShowInfo = () => {
    const { isHover, doMouseHover, doMouseOut } = useHover();
    return (
        <div className="container example-area">
            <h4>example 1 - <code>Show more details</code></h4>

            <div>
                <button onMouseEnter={() => { doMouseHover()}}
                onMouseOut={() => doMouseOut()}>Show me info</button>

                {
                    isHover ?
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        : null
                }
            </div>


        </div>
    )

}

export default ShowInfo;