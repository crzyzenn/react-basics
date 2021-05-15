import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.css";

export default function Index() {
  const { pathname } = useLocation();
  return (
    <header>
      <nav className="header--nav">
        <NavLink to="/" isActive={() => pathname === "/"}>
          Home
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </header>
  );
}
