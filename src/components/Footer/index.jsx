import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function index() {
  return (
    <footer>
      <div className="footer--links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/posts">Posts</Link>
      </div>
      <div className="footer--bottom">
        &copy; Deerwalk, {new Date().getFullYear()}
      </div>
    </footer>
  );
}
