import { useState } from "react";
import Button from "./Button";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   fetch("http://localhost:8000/api/v1/user/get")
  //     .then((response) => response.json())
  //     .then((res) => setUser(res))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });
  return (
    <form className="d-flex justify-content-end my-2 w-40">
      <input
        className="form-control col-xs-2"
        type="text"
        placeholder="Użytkownik"
        aria-label="Search"
        name="usernameInput"
      ></input>
      <input
        className="form-control col-xs-2 mx-2"
        type="password"
        placeholder="Hasło"
        aria-label="Search"
        name="passwordInput"
      ></input>
      <button
        onClick={
          // handleSubmit = (event) => {
          //   event.preventDefault();
          //   console.log(event.target.elements.usernameInput.value);
          //   console.log(event.target.elements.passwordInput.value);
          // };
          
        }}
      >
        Zaloguj
      </button>
    </form>
  );
};

function onSubmit() {}

export default LoginForm;
