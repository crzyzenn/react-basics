// Alias -> different name, aka -> also known as...
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Api from "./components/Api";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
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
      </Content>
      <Footer />
    </Router>
  );
}
export default App;
