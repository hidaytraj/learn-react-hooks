import './App.css';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

// Examples: 

import UseStateExample from './components/Examples/UseStateExample';
import UseEffectExample from './components/Examples/UseEffectExample';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import BlogList from './components/Assignments/Blog/BlogList';
import BlogDetails from './components/Assignments/Blog/BlogDetails';
import UseRefExample from './components/Examples/UseRefExample';
import { CustomHooks } from './CustomHooks/Examples/CustomHooks';
import { useMatchFetch } from "./CustomHooks/UseMatchFetch";

function App() {
  const render = useMatchFetch("https://jsonplaceholder.typicode.com/todos/1");

  //const render = useMatchFetch("https://jsonplaceholder.typicode.com/posts");
  // https://jsonplaceholder.typicode.com/users


  return (
    <Router>
      {
        render({
          pending: () => <div>Loading...</div>,
          error: (err) => <div>{err.toString()}</div>,
          data: (data) => <pre>{JSON.stringify(data, null, 2)}</pre>
        })
      }
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li> <Link to="/useState">UseState</Link></li>
              <li> <Link to="/useEffect">useEffect</Link></li>
              <li> <Link to="/useRef">useRef</Link></li>
              <li> <Link to="/examples">customHooks</Link></li>
              <li> <Link to="/blog">Blog</Link></li>
            </ul>
          </nav>
        </header>


        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/useState" component={UseStateExample} />
            <Route path="/useEffect" component={UseEffectExample} />

            <Route path="/useEffect" component={UseEffectExample} />
            <Route path="/useRef" component={UseRefExample} />

            <Route path="/examples">
              <CustomHooks />
            </Route>
            <Route path="/blog" component={BlogList} />
            <Route path="/blogs/:id" component={BlogDetails} />

            {/* NonFound Component -  in case of wrong path */}
            <Route path="*" component={NotFound} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
