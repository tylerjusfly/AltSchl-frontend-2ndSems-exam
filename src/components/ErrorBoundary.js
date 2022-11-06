import React from "react";

export const ErrorBound = ({ user }) => {
  if (user) {
    throw new Error("An Error Occured due to user Clicking The Error Boundary Nav Link To test Error Boundary");
  }

  return <div>ErrorBoundary {user}</div>;
};
