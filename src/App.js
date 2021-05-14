// Alias -> different name, aka -> also known as...
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import "./App.css";
import Api from "./components/Api";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <header>
        <nav>
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/posts">Posts</Link>
        </nav>
      </header>

      {/* Define Routes... */}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        {/* Nested Route */}
        <Route path="/posts">
          <Api />
        </Route>
        <Route path="/">{<h1>Home Page</h1>}</Route>
      </Switch>
    </Router>
  );
}
export default App;
