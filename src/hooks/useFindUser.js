import { useState } from "react";
import { users } from "../users/users";

export const useFindUser = (username) => {
  const [user, setUser] = useState();
  const userData = users.find((user) => user.username === username);

  if (userData) {
    setUser(userData);
  } else {
    setUser(null);
  }

  return { user };
};
