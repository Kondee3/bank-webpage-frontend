import { useState } from "react";
import { sha256  } from "js-sha256";
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
interface ResponseState {
    state: string;
}

const RegisterForm = ({ inputClassname, buttonClassname }: Props) => {
    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        date: ''
    });

    const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        date: ''
    })
    const [duplicate, setDuplicate] = useState(false);
    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const validateInput = e => {
        const { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

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
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
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
                    break;

                case "date":
                    if (!value) {
                        stateObj[name] = "Please enter Date.";
                    }
                    break;
                case "submitButton":
                    if (duplicate) {
                        stateObj["email"] = "Email already in use!";
                    }
                    break;
                default:
                    break;
            }

            return stateObj;
        });
    }
    const inputValidationFormat = (error: string) => {
        return error && (inputClassname + " is-invalid") || inputClassname;
    }
    return (
        <form  onSubmit={(event) => {

            const user: User = {
                username_form: input.username,
                password_form: sha256(input.password),
                email_form: input.email,
                date_form: input.date,
            }

            postmethod(event, user)
                .then((res: string) => {
                    res == "DUPLICATE" && setDuplicate(true)
                })
                .catch((err) => console.log(err));


        }}>
            <div className="form-floating">
                <input
                    className={inputValidationFormat(error.username)}
                    type="text"
                    aria-label="Search"
                    onChange={onInputChange}
                    onBlur={validateInput}
                    name="username">
                </input>
                <label htmlFor="username" children="Użytkownik" />
                {error.username && <span className="invalid-feedback">{error.username}</span>}
            </div>
            <div className="form-floating">

                <input
                    className={inputValidationFormat(error.password)}
                    type="password"
                    aria-label="Search"
                    onChange={onInputChange}
                    onBlur={validateInput}
                    name="password"
                ></input>
                <label htmlFor="password" children="Hasło" />
                {error.password && <span className="invalid-feedback">{error.password}</span>}
            </div>
            <div className="form-floating">
                <input
                    className={inputValidationFormat(error.confirmPassword)}
                    type="password"
                    aria-label="Search"
                    onChange={onInputChange}
                    onBlur={validateInput}
                    name="confirmPassword"
                ></input>
                <label htmlFor="confirmPassword" children="Powtórz Hasło" />
                {error.confirmPassword && <span className="invalid-feedback">{error.confirmPassword}</span>}
            </div>
            <div className="form-floating">
                <input
                    className={inputValidationFormat(error.email)}
                    type="email"
                    aria-label="Search"
                    onChange={onInputChange}
                    onBlur={validateInput}
                    name="email"
                ></input>
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
                ></input>
                <label htmlFor="date" children="Data Urodzenia" />
                {error.date && <span className="invalid-feedback">{error.date}</span>}
            </div>
            <button onClick={validateInput} name="submitButton" className={buttonClassname}>
                Zarejestruj
            </button>
        </form >
    );
};
async function postmethod(event: React.FormEvent<HTMLFormElement>, user: User): Promise<string> {
    let responseState = "";
    event.preventDefault();
    await fetch('http://127.0.0.1:8080/api/v1/user/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((res: ResponseState) => responseState = res.state.toString())
        .catch((err) => console.log(err));
    return responseState;

}


export default RegisterForm;
