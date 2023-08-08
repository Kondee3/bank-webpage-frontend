
import { useState } from "react";

interface User {
    username_form: string;
    password_form: string;
}

const LoginFormFullPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    return (
        <form onSubmit={(event) => {

            const user: User = {
                username_form: username,
                password_form: password
            }
            postmethod(event, user);

        }} className="mx-5 my-5 col-3 row-1 " style={{height: '400px'}}> 
            <input
                className="form-control"
                type="text"
                placeholder="Użytkownik"
                aria-label="Search"
                onChange={handleChangeUsername}
                name="username"
            ></input>
            <input
                className="form-control my-3 "
                type="password"
                placeholder="Hasło"
                aria-label="Search"
                onChange={handleChangePassword}
                name="password"
            ></input>
            <button className="btn btn-outline-success">
                Zaloguj
            </button>
        </form>
    );
};
function postmethod(event: React.FormEvent<HTMLFormElement>, user: User) {

    event.preventDefault();
    console.log(user);
    fetch('http://127.0.0.1:8080/api/v1/user/add', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).catch((err) => console.log(err));


}


export default LoginFormFullPage;
