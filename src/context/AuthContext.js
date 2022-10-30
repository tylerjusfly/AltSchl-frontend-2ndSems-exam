import { createContext, useReducer, useState } from "react";

export const AuthContext = createContext();

//the children is whatever the AuthContextProvider wraps
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useState({
    user: "Jaywalker",
  });

  return <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>;
};
