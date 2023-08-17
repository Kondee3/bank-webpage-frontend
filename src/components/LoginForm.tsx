import { useState } from "react";

interface Props {
    formClassname?: string;
    inputClassname: string;
    buttonClassname: string;
}
interface User {
    email_form: string;
    password_form: string;
}
interface ResponseState {
    state: string;
}

const LoginForm = ({ formClassname, inputClassname, buttonClassname }: Props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setPassword(target.value);
    };

    const handleChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setEmail(target.value);
    };

    return (
        <form className={formClassname} onSubmit={(event) => {
            const user: User = {
                email_form: email,
                password_form: password
            }

            postmethod(event, user)
                .then((res: string) => console.log(res))
                .catch((err) => console.log(err));


        }} >
            <input
                className={inputClassname}
                type="text"
                placeholder="Email"
                aria-label="Search"
                onChange={handleChangeEmail}
                name="username"
            ></input>
            <input
                className={inputClassname}
                type="password"
                placeholder="Hasło"
                aria-label="Search"
                onChange={handleChangePassword}
                name="password"
            ></input>
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
