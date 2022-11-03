import { useState } from "react";
import { users } from "../users/users";

export const useFindUser = (username) => {
  const FindUser = () => {
    const [user, setUser] = useState();
    const userData = users.find((user) => user.username === username);

    if (userData) {
      setUser(userData);
    } else {
      setUser(null);
    }

    return { user };
  };

  return { FindUser };
};
