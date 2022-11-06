import { Link } from "react-router-dom";
import navLogo from "../assets/imgs/navbar.svg";
import { useAuthContext } from "../hooks/useAuthContext";

export const Navbar = () => {
  const { user, logOut } = useAuthContext();

  return (
    <nav className="flex flex-row justify-between p-5">
      <Link to="/" className="self-center navb">
        <img src={navLogo} alt="nav Logo" width={44} />
      </Link>

      <div className="parentDiv">
        <div className="p-4 space-y-2 rounded shadow self-center lg:hidden md:hidden drop--btn ">
          <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
        </div>
        <ul className="flex flex-col gap-12 md:flex-row lg:flex-row font-bold font-fira pr-5 self-center custom-hidden dropdown--content">
          <Link to={user ? "users" : "login"}>Dashboard {user && `| ${user}`}</Link>
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
      </div>
    </nav>
  );
};
