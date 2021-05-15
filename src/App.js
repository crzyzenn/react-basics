// Alias -> different name, aka -> also known as...
import axios from "axios";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from "react-router-dom";
import "./App.css";
import Api from "./components/Api";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
// import Header from "./components/Header";

// Exercise:
// Create a Header component and render it
// Bonus: Style the header -> each link must have horizontal space..

function App() {
  return (
    <Router>
      <Header />

      {/* Define Routes... */}
      <Content>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          {/* Nested Route */}
          <Route exact path="/posts/:id">
            <Post />
          </Route>
          <Route exact path="/posts">
            <Api />
          </Route>
          <Route path="/">
            {
              <div>
                <h1>Home Page</h1>
                <p>This is my homeeeee.....</p>
              </div>
            }
          </Route>
        </Switch>
      </Content>
      <Footer />
    </Router>
  );
}

function Post() {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPost = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setPost(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <h1>Post {id}</h1>

      {loading && "Loading Post... Please wait."}

      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}

export default App;
