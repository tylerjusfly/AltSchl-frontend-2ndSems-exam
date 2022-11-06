import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};

export const Home = () => {
  return (
    // you can add React.Fragment if you wish to add styles to this tag
    <>
      <main className="flex flex-col items-start h-96 m-24">
        <div className="font-fira word-space">
          SO, YOU WANT TO TRAVEL TO <p className="pt-5 text-8xl font-ty word-space"> SPACE </p>
        </div>
        <p className="w-80 mt-7 font-ty leading-7">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of
          on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
        <button className="btn lg:mx-96 sm:mx-40 mt-7 md:mx-72">Explore</button>
      </main>
    </>
  );
};

export default Home;
