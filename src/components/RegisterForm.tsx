import { sha256 } from "js-sha256";
import {  useState} from "react";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
interface Props {
  inputClassname: string;
  buttonClassname: string;
}

interface User {
  username_form: string;
  password_form: string;
  email_form: string;
  date_form: string;
}

const RegisterForm = ({ inputClassname, buttonClassname }: Props) => {
    
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    date: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    date: "",
  });
  const [duplicate, setDuplicate] = useState(false);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e:any) => {
    const { name, value } = e.target;

    setError((prev) => {
      const stateObj: any = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email.";
          }
          if (duplicate) {
            stateObj["email"] = "Email already in use!";
          }
          break;

        case "date":
          if (!value) {
            stateObj[name] = "Please enter Date.";
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
  return (
    <form
      onSubmit={(event) => {
        const user: User = {
          username_form: input.username,
          password_form: sha256(input.password),
          email_form: input.email,
          date_form: input.date,
        };

        postmethod(event, user)
          .then((status: number) => {
                if (status ==200){
                            navigate("/login");
                        }else navigate("user/error"); 
          })
          .catch((err) => console.log(err));
      }}
    >
      <div className="form-floating">
        <input
          className={inputValidationFormat(error.username)}
          type="text"
          aria-label="Search"
          onChange={onInputChange}
          onBlur={validateInput}
          name="username"
        >
        </input>
        <label htmlFor="username" children="Użytkownik" />
        {error.username && (
          <span className="invalid-feedback">{error.username}</span>
        )}
      </div>
      <div className="form-floating">
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
      <div className="form-floating">
        <input
          className={inputValidationFormat(error.confirmPassword)}
          type="password"
          aria-label="Search"
          onChange={onInputChange}
          onBlur={validateInput}
          name="confirmPassword"
        >
        </input>
        <label htmlFor="confirmPassword" children="Powtórz Hasło" />
        {error.confirmPassword && (
          <span className="invalid-feedback">{error.confirmPassword}</span>
        )}
      </div>
      <div className="form-floating">
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
        {error.email && <span className="invalid-feedback">{error.email}</span>}
      </div>
      <div className="form-floating">
        <input
          className={inputValidationFormat(error.date)}
          type="date"
          aria-label="Search"
          onChange={onInputChange}
          onBlur={validateInput}
          name="date"
        >
        </input>
        <label htmlFor="date" children="Data Urodzenia" />
        {error.date && <span className="invalid-feedback">{error.date}</span>}
      </div>
      <button type="submit"
        name="submitButton"
        className={buttonClassname}
      >
        Zarejestruj
      </button>
    </form>
  );
};
async function postmethod(
  event: React.FormEvent<HTMLFormElement>,
  user: User,
): Promise<number> {
  event.preventDefault();
    let r = 0;
  await axios.post("http://192.168.0.5:8080/api/v1/user/register", user
    
  )
        .then((response: AxiosResponse)=>  r = response.status)
    .catch((err) => console.log(err));
  return r;
}

export default RegisterForm;
