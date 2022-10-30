import React from "react";
import warnSign from "../assets/imgs/warningsign.svg";

export const Farewell = () => {
  return (
    <div className="flex flex-col justify-center items-center font-ty">
      <img className="mt-10" src={warnSign} alt="DOES NOT EXIST" width={370} />
      <h2 className="text-3xl font-bold">PAGE DOES NOT EXIST</h2>
    </div>
  );
};
