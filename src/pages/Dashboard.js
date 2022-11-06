import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { users } from "../users/users";

export const Dashboard = () => {
  const { user } = useAuthContext();

  const data = users.find((u) => u.username === user);

  return (
    <main className="flex-middle md:w-96 lg:w-96 m-auto">
      <div className="bg-white text-black p-20 rounded-lg">
        <img src={data.images} alt={data.username} width={400} className="rounded-lg" />
        <p className="font-ty font-bold mt-5 text-center">Username : {data.username}</p>
      </div>
    </main>
  );
};
