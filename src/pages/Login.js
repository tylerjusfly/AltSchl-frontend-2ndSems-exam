import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFindUser } from "../hooks/useFindUser";

export const Login = () => {
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
  });

  const { dispatch } = useAuthContext();

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
    //const { user } = useFindUser(formInput.username);
    const userData = users.find((user) => user.username === username);

    console.log(userData);

    //send a login SuccessFul popup
    dispatch({ type: "LOGIN", payload: userData.username });
  }

  return (
    <div className="flex flex-col items-start h-96 m-24">
      <div className="mb-10 tab font-ty"> Login with username(tylerjusfly) password(altschool)</div>
      <form onSubmit={submitForm} className="flex flex-col gap-10 w-100 bg-white p-10 rounded text-black font-ty">
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
      </form>
    </div>
  );
};
