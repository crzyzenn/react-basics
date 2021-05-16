import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import "./header.css";

export default function Index() {
  const { pathname } = useLocation();
  const [auth, setAuth] = useContext(AuthContext);
  const { loggedIn, user } = auth;

  console.log(auth);

  const handleLogout = () => {
    setAuth({
      loggedIn: false,
      user: null
    });
  };

  return (
    <header>
      <nav className="header--nav">
        <NavLink to="/" isActive={() => pathname === "/"}>
          Home
        </NavLink>
        <NavLink to="/posts">Posts</NavLink>
        {!loggedIn ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        ) : (
          <>
            <a href="#">{user.name}</a>
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </>
        )}
      </nav>
    </header>
  );
}
