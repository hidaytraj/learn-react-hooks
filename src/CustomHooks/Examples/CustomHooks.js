import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import UseCounterExamples from "./useCounterExamples/UseCounterExamples";


export function CustomHooks() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Custom Hooks Examples</h2>

      <ul>
      <li>
          <Link to={`${match.url}/useCounter`}>useCounter</Link>
        </li>
        <li>
          <Link to={`${match.url}/useCounters`}>useCounters</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
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

  if(examplesId === 'useCounter') {
    return <UseCounterExamples />
  } else {
    return <h3>Requested examplesId ID: {examplesId}</h3>;
  }
 
}