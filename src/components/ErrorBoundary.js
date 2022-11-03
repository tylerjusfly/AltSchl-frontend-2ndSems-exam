import React from "react";

export const ErrorBound = ({ user }) => {
  if (user) {
    throw new Error("An Error Occured due to user Typing Bomb To test Error Boundary");
  }

  return <div>ErrorBoundary {user}</div>;
};
