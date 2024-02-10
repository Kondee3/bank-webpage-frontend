import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { sha256 } from "js-sha256";
import axios, { AxiosResponse } from "axios";
interface Props {
  formClassname?: string;
  inputClassname: string;
  buttonClassname: string;
  isNavbar?: boolean;
}
interface User {
  email: string;
  password: string;
}

const LoginForm = (
  { formClassname, inputClassname, buttonClassname, isNavbar }: Props,
) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };
  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };

  const inputValidationFormat = (error: string) => {
    return error && (inputClassname + " is-invalid") || inputClassname;
  };
  const navigate = useNavigate();
  return (
    <>
      <form
        className={formClassname}
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
          const user: User = {
            email: input.email,
            password: sha256(input.password),
          };
          postmethod(event, user)
            .then((status: number) => {
              if (status == 200) {
                navigate("/user/dashboard");
              } else navigate("/user/error");
            })
            .catch((err) => console.log(err));
        }}
      >
        <div className={"form-floating"}>
          <input
            className={inputValidationFormat(error.email)}
            type="email"
            aria-label="Search"
            onChange={onInputChange}
            onBlur={validateInput}
            name="email"
          >
          </input>
          <label htmlFor="email" children="Email" />
          {error.email && (
            <span className="invalid-feedback">{error.email}</span>
          )}
        </div>
        <div className={isNavbar && "mx-3 form-floating" || "form-floating"}>
          <input
            className={inputValidationFormat(error.password)}
            type="password"
            aria-label="Search"
            onChange={onInputChange}
            onBlur={validateInput}
            name="password"
          >
          </input>
          <label htmlFor="password" children="Hasło" />
          {error.password && (
            <span className="invalid-feedback">{error.password}</span>
          )}
        </div>
        <button role="submit" className={buttonClassname}>
          Zaloguj
        </button>
      </form>
      <div className="container unauthenticated">
        <a href="/login/oauth2/authorization/github">Log in with Github</a>
      </div>
    </>
  );
};
async function postmethod(
  event: React.FormEvent<HTMLFormElement>,
  user: User,
): Promise<number> {
  let r: number = 0;
  event.preventDefault();
  await axios.post("http://192.168.0.5:8080/api/v1/user/login", user)
    .then((response: AxiosResponse) => r = response.status)
    .catch((err) => console.log(err));
  return r;
}

export default LoginForm;
