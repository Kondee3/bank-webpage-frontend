import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
const LoginPage = () => {
    return (
        <>
            <Navbar withLogin={false} />
            <div className="bg-dark min-vh-100 row ">
                <div className="square w-50 rounded-5 p-5 container bg-light d-flex flex-column
                justify-content-center align-items-center my-auto w3-animate-top" style={{height: "40%"}} >
                <h1>Logowanie</h1>  
                    <LoginForm inputClassname="form-control my-3"
                        buttonClassname="btn btn-lg btn-success col-12"></LoginForm>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
