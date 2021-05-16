import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ loggedIn: false, user: null });

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
}
