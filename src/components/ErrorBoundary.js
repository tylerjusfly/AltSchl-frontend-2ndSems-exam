import React from "react";

export const ErrorBound = ({ user }) => {
  if (user) {
    throw new Error("Abigeal Ocuured");
  }

  return <div>ErrorBoundary {user}</div>;
};
