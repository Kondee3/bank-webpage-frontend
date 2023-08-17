import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import "./LoginPage.css";
const LoginPage = () => {
    return (
        <>
            <Navbar withLogin={false} />
            <body className="bg-dark min-vh-100 row ">
                <div className="square rounded-5 p-5  container bg-light d-flex flex-column
                justify-content-center align-items-center col-3 my-auto w3-animate-top" style={{height: "40%"}} >
                <h1 className="align-items-top">Logowanie</h1>  
                    <LoginForm inputClassname="form-control my-3"
                        buttonClassname="btn btn-outline-success col-12"></LoginForm>
                </div>
            </body>
        </>
    );
}

export default LoginPage;
