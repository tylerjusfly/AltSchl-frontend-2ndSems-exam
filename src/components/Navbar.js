import { Link } from "react-router-dom";
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
    </nav>
  );
};
