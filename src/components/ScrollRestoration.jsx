import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollRestoration() {
  const { pathname } = useLocation();

  // Scroll to top on each new page.
  // Logic: useEffect with pathname as a dependency
  // So this functions runs whenever the pathname changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
