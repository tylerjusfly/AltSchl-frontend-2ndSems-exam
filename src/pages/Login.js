import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { users } from "../users/users";
import { Link } from "react-router-dom";
import navLogo from "../assets/imgs/navbar.svg";

export const Login = () => {
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
  });
  const [isAuth, setIsAuth] = useState("PENDING");

  const { dispatch, user } = useAuthContext();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function submitForm(event) {
    event.preventDefault();
    console.log(formInput);
    //find for user in a file , if exist , pass user name in context
    const userData = users.find((user) => user.username === formInput.username.toLowerCase());

    //checking if User and Password matches
    if (userData && userData.pass === formInput.password.toLowerCase()) {
      setIsAuth("AUTHENTICATED");

      //send a login SuccessFul popup
      dispatch({ type: "LOGIN", payload: { name: userData?.username, pass: userData?.pass } });
    }
    if (!userData || formInput.password.toLowerCase() !== userData.pass) {
      setIsAuth("FORBIDDEN");
    }
  }

  //This is to recognize State
  const isLoggedIn = isAuth === "AUTHENTICATED";
  const notLoggedIn = isAuth === "FORBIDDEN";

  if (isLoggedIn) {
    return (
      <div className="bg-white text-black flex-middle gap-10 w-96 m-auto p-8 mt-20 rounded">
        <img src={navLogo} alt="web-logo" width={70} />
        <p className="font-ty font-bold">Your Are SuccessFully Logged In {user} </p>
        <button>
          <Link className="btn" to="/users">
            Go To Dashboard
          </Link>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start h-96 m-24">
      <div className="mb-10 tab font-ty lg:w-100 md:w-100 sm:w-80"> Login with username(jordan) password(ladygaga)</div>
      <form
        onSubmit={submitForm}
        className="flex flex-col gap-10 sm:w-80 md:w-100 lg:w-100 bg-white p-10 rounded text-black font-ty"
      >
        <input
          type="text"
          name="username"
          placeholder="username"
          className="input"
          value={formInput.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          className="input"
          value={formInput.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn font-ty">
          LOGIN
        </button>
        {notLoggedIn && <pre className="text-red-600">Invalid User Details</pre>}
      </form>
    </div>
  );
};
