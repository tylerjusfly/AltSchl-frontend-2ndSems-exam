import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const Dashboard = () => {
  const { user } = useAuthContext();

  return <div>Dashboard {user}</div>;
};

// find user by username and display deatils
