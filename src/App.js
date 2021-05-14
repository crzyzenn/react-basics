// Alias -> different name, aka -> also known as...
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Api from "./components/Api";
import { useEffect } from "react";

function App() {
  const fn = (link) => {
    switch (link) {
      case "/login":
        return "Login link";
      case "/register":
        return "Register link";
      case "/faq":
        return "Faq link";
      default:
        return "/";
    }
    // if(link === '/login') {
    //   return 'Login Link'
    // } else if(link === '/register') {
    //   return 'Register Link'
    // }
  };

  // console.log(fn("/faq"));

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
        <Route path="/">
          <Api />
        </Route>
      </Switch>
    </Router>
  );
}

// function Topics() {
//   let match = useRouteMatch();
//   console.log(match);

//   return (
//     <div>
//       <header>
//         <Link to={`${match.url}/props-v-state`}>Go inside topics page.</Link>
//       </header>

//       <Switch>
//         <Route path={`${match.url}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

function Post() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;
