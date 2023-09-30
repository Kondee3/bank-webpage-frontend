
import Navbar from "./Navbar";
import RegisterForm from "./RegisterForm";
const RegisterPage = () => {
    return (
        <>

            <Navbar withLogin={false} />
            <div className="bg-dark min-vh-100 row ">
                <div className="square rounded-5 p-5  container bg-light d-flex flex-column
                justify-content-center align-items-center col-6 my-auto w3-animate-top" style={{height: "60%"}} >
                <h1 className="align-items-top">Rejestracja</h1>  
                    <RegisterForm inputClassname="form-control my-3"
                        buttonClassname="btn btn-outline-success col-12"></RegisterForm>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
