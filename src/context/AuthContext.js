import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload.name, pass: action.payload.pass };
    case "LOGOUT":
      return { ...state, user: null, pass: null };

    default:
      return { ...state };
  }
};

//the children is whatever the AuthContextProvider wraps
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    pass: null,
  });

  const logOut = () => {
    dispatch({ type: "LOGOUT" });
  };

  return <AuthContext.Provider value={{ ...state, dispatch, logOut }}>{children}</AuthContext.Provider>;
};
