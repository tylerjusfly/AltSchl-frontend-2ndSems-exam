import React from "react";
import { Link, Outlet } from "react-router-dom";
import navLogo from "../assets/imgs/navbar.svg";
import { useAuthContext } from "../hooks/useAuthContext";

export const Navbar = () => {
  const { user, logOut } = useAuthContext();

  return (
    <nav className="flex flex-row justify-between p-4">
      <Link to="/">
        <img src={navLogo} alt="nav Logo" width={44} />
      </Link>
      <ul className="flex flex-row gap-12 font-bold font-fira pr-5 self-center">
        <Link to="users">Dashboard {user && `| ${user}`}</Link>
        <Link to="errorboundary">ErrorBoundary</Link>
        {user ? (
          <>
            <Link onClick={logOut} to="/">
              LogOut
            </Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </ul>
    </nav>
  );
};

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
        <p className="font-fira word-space">
          SO, YOU WANT TO TRAVEL TO <p className="pt-5 text-8xl font-ty word-space"> SPACE </p>
        </p>
        <p className="w-80 mt-7 font-ty leading-7">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of
          on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
        <button className="btn mx-96">Explore</button>
      </main>
    </>
  );
};

export default Home;
