import { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [auth] = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Redirect to home if navigating to login, register links
    // auth.loggedIn && history.push("/");
    if (auth.loggedIn && (pathname === "/login" || pathname === "/register")) {
      history.push("/");
    }
  }, [auth, pathname, history]);

  return null;
}
