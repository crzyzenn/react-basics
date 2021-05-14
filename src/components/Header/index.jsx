import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function index() {
  return (
    <header>
      <nav className="header--nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </header>
  );
}
