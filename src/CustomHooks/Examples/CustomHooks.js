import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import UseCounterExamples from "./useCounterExamples/UseCounterExamples";
import UseListExamples from "./useListExamples/UseListExamples";
import UseHoverExamples from "./useHoverExamples/UseHoverExamples";
import UseOutSideClickExamples from "./useOutsideClickExamples/UseOutsideClickExamples";
import UseFetchExamples from "./useFetchExamples/UseFetchExamples";


export function CustomHooks() {
    let match = useRouteMatch();

    return (
        <div>
            <h1>Custom Hooks Examples</h1>

            <ul className="panel-nav">
                <li>
                    <Link to={`${match.url}/useCounter`}>useCounter</Link>
                </li>
                <li>
                    <Link to={`${match.url}/useList`}>useList</Link>
                </li>

                <li>
                    <Link to={`${match.url}/useHover`}>useHover</Link>
                </li>


                <li>
                    <Link to={`${match.url}/useOutsideClick`}>useOutsideClick</Link>
                </li>


                <li>
                    <Link to={`${match.url}/useFetch`}>
                        useFetch</Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:examplesId`}>
                    <Example />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a Example.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Example() {
    let { examplesId } = useParams();

    if (examplesId === 'useCounter') {
        return <UseCounterExamples />
    } else if (examplesId === 'useList') {
        return <UseListExamples />
    } else if (examplesId === 'useHover') {
        return <UseHoverExamples />
    } else if (examplesId === 'useOutsideClick') {
        return <UseOutSideClickExamples />
    }
    else if (examplesId === 'useFetch') {
        return <UseFetchExamples />
    } else {
        return <h3>Requested examplesId ID: {examplesId}</h3>;
    }

}