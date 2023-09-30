import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { sha256 } from "js-sha256";
interface Props {
    formClassname?: string;
    inputClassname: string;
    buttonClassname: string;
    isNavbar?: boolean;
}
interface User {
    email_form: string;
    password_form: string;
}
interface ResponseState {
    state: string;
}

const LoginForm = ({ formClassname, inputClassname, buttonClassname, isNavbar }: Props) => {

    const [response, setResponse] = useState({});
    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState({
        email: '',
        password: '',
    })

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
    }

    const inputValidationFormat = (error: string) => {
        return error && (inputClassname + " is-invalid") || inputClassname;
    }
    const navigate = useNavigate();
    return (
        <form className={formClassname} onSubmit={(event) => {
            const user: User = {
                email_form: input.email,
                password_form: sha256(input.password)
            }

            postmethod(event, user)
                .then((res: string) => setResponse(res))
                .catch((err) => console.log(err));
            if (response == "SUCCESS") {
                navigate("/user/dashboard");
            }

        }} >
            <div className={"form-floating"}>
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
            <div className={isNavbar && "mx-3 form-floating" || "form-floating"}>
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
            <button className={buttonClassname}>
                Zaloguj
            </button>
        </form>
    );
};
async function postmethod(event: React.FormEvent<HTMLFormElement>, user: User): Promise<string> {
    let responseState = "";
    event.preventDefault();
    await fetch('http://127.0.0.1:8080/api/v1/user/login', {
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


export default LoginForm;
