import React from "react";
import error404 from "../assets/imgs/errorsvg.svg";

export const Farewell = () => {
  return (
    <div className="flex flex-col justify-center items-center font-ty">
      <img className="mt-10" src={error404} alt="DOES NOT EXIST" width={370} />
      <h2 className="text-3xl font-bold mt-10">PAGE DOES NOT EXIST</h2>
    </div>
  );
};
